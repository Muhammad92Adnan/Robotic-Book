import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Configuration variables
QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")
QDRANT_COLLECTION_NAME = os.getenv("QDRANT_COLLECTION_NAME", "AdnanCluster")  # Default to AdnanCluster if not set

COHERE_API_KEY = os.getenv("COHERE_API_KEY")
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

# Validate that required environment variables are set
REQUIRED_VARS = [
    "QDRANT_URL",
    "QDRANT_API_KEY",
    "COHERE_API_KEY"
]

missing_vars = [var for var in REQUIRED_VARS if not os.getenv(var)]
if missing_vars:
    raise ValueError(f"Missing required environment variables: {', '.join(missing_vars)}")

print("Configuration loaded successfully!")
print(f"Qdrant URL: {QDRANT_URL}")
print(f"Collection Name: {QDRANT_COLLECTION_NAME}")