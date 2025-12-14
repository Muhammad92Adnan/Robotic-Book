import cohere
from qdrant_client import QdrantClient
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Load configuration
from config import QDRANT_URL, QDRANT_API_KEY, QDRANT_COLLECTION_NAME, COHERE_API_KEY

# Initialize Cohere client using API key from environment
cohere_client = cohere.Client(COHERE_API_KEY)

# Connect to Qdrant using URL and API key from environment
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

def retrieve(query):
    embedding = get_embedding(query)
    result = qdrant.query_points(
        collection_name=QDRANT_COLLECTION_NAME,
        query=embedding,
        limit=5
    )
    return [point.payload["text"] for point in result.points]

# Test
print(retrieve("What data do you have?"))