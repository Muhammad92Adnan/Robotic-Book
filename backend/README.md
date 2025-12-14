# Backend API Configuration

This backend uses environment variables to store sensitive information like API keys and URLs. All configuration is loaded from the `.env` file in the project root.

## Environment Variables

The following environment variables are used:

- `QDRANT_URL`: The URL for the Qdrant vector database
- `QDRANT_API_KEY`: The API key for Qdrant authentication
- `QDRANT_COLLECTION_NAME`: The name of the collection in Qdrant (default: "AdnanCluster")
- `COHERE_API_KEY`: The API key for Cohere services
- `GROQ_API_KEY`: The API key for Groq services (optional)

## Configuration Files

### `config.py`
This file loads all environment variables and provides centralized access to configuration values. All backend modules should import configuration values from this file.

### `api_utils.py`
Utility functions for making API calls using the environment variables, including:
- `get_api_config()`: Returns all API configurations
- `make_api_request()`: Generic function for API requests
- `validate_environment()`: Checks if required environment variables are set

## Usage

To use the environment variables in your code:

```python
from config import QDRANT_URL, QDRANT_API_KEY, COHERE_API_KEY

# Use the variables in your code
qdrant_client = QdrantClient(url=QDRANT_URL, api_key=QDRANT_API_KEY)
cohere_client = cohere.Client(COHERE_API_KEY)
```

## Files Updated

The following existing files have been updated to use environment variables instead of hardcoded values:
- `main.py`
- `agent.py`
- `retrieving.py`

## Example Usage

Run the example to see the configuration in action:
```bash
python example_usage.py
```