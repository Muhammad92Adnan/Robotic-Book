from flask import Flask, request, jsonify
from flask_cors import CORS
from agents import Agent, Runner, OpenAIChatCompletionsModel, AsyncOpenAI
from agents import set_tracing_disabled, function_tool
import os
from dotenv import load_dotenv
import cohere
from qdrant_client import QdrantClient
import groq

# Load environment variables
load_dotenv()
set_tracing_disabled(disabled=True)

# Initialize services using environment variables
groq_api_key = os.getenv("GROQ_API_KEY")
provider = AsyncOpenAI(
    api_key=groq_api_key,
    base_url="https://api.groq.com/openai/v1"
)

model = OpenAIChatCompletionsModel(
    model="llama-3.1-8b-instant",
    openai_client=provider
)

# Get API keys and URLs from environment variables
COHERE_API_KEY = os.getenv("COHERE_API_KEY")
QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

# Initialize Cohere client
cohere_client = cohere.Client(COHERE_API_KEY)

# Connect to Qdrant
qdrant = QdrantClient(
    url=QDRANT_URL,
    api_key=QDRANT_API_KEY
)

def get_embedding(text):
    """Get embedding vector from Cohere Embed v3"""
    response = cohere_client.embed(
        model="embed-english-v3.0",
        input_type="search_query",  # Use search_query for queries
        texts=[text],
    )
    return response.embeddings[0]  # Return the first embedding

def retrieve_texts(query):
    """Regular function to retrieve texts (not a tool)"""
    embedding = get_embedding(query)
    result = qdrant.query_points(
        collection_name="AdnanCluster",
        query=embedding,
        limit=5
    )
    return [point.payload["text"] for point in result.points]

@function_tool
def retrieve(query):
    """Function tool for the agent"""
    return retrieve_texts(query)

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        user_message = data.get('message', '')

        if not user_message:
            return jsonify({'error': 'No message provided'}), 400

        # Directly retrieve context using the regular retrieve_texts function
        retrieved_context = retrieve_texts(user_message)

        # If we have context, generate a response based on it
        if retrieved_context and len(retrieved_context) > 0:
            # Create a context string from the retrieved content
            context_str = "\n".join(retrieved_context[:3])  # Use first 3 chunks

            # Use the LLM to generate a concise response based on the context
            from openai import OpenAI

            # Initialize the OpenAI client with Groq API
            groq_client = OpenAI(
                api_key=GROQ_API_KEY,
                base_url="https://api.groq.com/openai/v1"
            )

            # Create a prompt for the LLM to generate a concise answer
            prompt = f"""
            Based on the following context from the Physical AI & Humanoid Robotics textbook,
            please provide a concise and relevant answer to the question: "{user_message}"

            Context:
            {context_str}

            Please keep your answer focused and limit it to 2-3 sentences if possible.
            If the context doesn't contain relevant information to answer the question, say "I don't know. The information is not available in the textbook."
            """

            # Generate a response using the LLM
            chat_completion = groq_client.chat.completions.create(
                messages=[
                    {
                        "role": "user",
                        "content": prompt,
                    }
                ],
                model="llama-3.1-8b-instant",  # Using a fast model for quick responses
                max_tokens=200,  # Limit response length
                temperature=0.3  # Lower temperature for more consistent answers
            )

            response_text = chat_completion.choices[0].message.content
        else:
            response_text = "I don't know. The information is not available in the textbook."

        response = {
            'response': response_text,
            'user_message': user_message
        }

        return jsonify(response)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)