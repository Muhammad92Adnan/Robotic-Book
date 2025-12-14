"""
Utility module for handling API calls and URL operations using environment variables.
This module provides functions that access URL and API values from the .env file.
"""

from config import QDRANT_URL, QDRANT_API_KEY, QDRANT_COLLECTION_NAME, COHERE_API_KEY, GROQ_API_KEY
import requests
import os
from dotenv import load_dotenv


def get_api_config():
    """
    Returns a dictionary with all API configurations loaded from environment variables
    """
    return {
        "qdrant_url": QDRANT_URL,
        "qdrant_api_key": QDRANT_API_KEY,
        "qdrant_collection_name": QDRANT_COLLECTION_NAME,
        "cohere_api_key": COHERE_API_KEY,
        "groq_api_key": GROQ_API_KEY
    }


def make_api_request(url, api_key, method="GET", payload=None):
    """
    Generic function to make API requests using the provided URL and API key

    Args:
        url (str): The API endpoint URL
        api_key (str): The API key for authentication
        method (str): HTTP method (GET, POST, PUT, DELETE)
        payload (dict): Request payload for POST/PUT requests

    Returns:
        Response object from the API call
    """
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }

    if method.upper() == "GET":
        response = requests.get(url, headers=headers)
    elif method.upper() == "POST":
        response = requests.post(url, headers=headers, json=payload)
    elif method.upper() == "PUT":
        response = requests.put(url, headers=headers, json=payload)
    elif method.upper() == "DELETE":
        response = requests.delete(url, headers=headers)
    else:
        raise ValueError(f"Unsupported HTTP method: {method}")

    return response


def validate_environment():
    """
    Validates that all required environment variables are properly set
    """
    required_vars = ['QDRANT_URL', 'QDRANT_API_KEY', 'COHERE_API_KEY']
    missing_vars = []

    for var in required_vars:
        if not os.getenv(var):
            missing_vars.append(var)

    if missing_vars:
        print(f"Warning: Missing environment variables: {', '.join(missing_vars)}")
        return False

    print("All required environment variables are set")
    return True


def print_config_info():
    """
    Prints configuration information (without sensitive API keys)
    """
    print("Configuration Information:")
    print(f"Qdrant URL: {QDRANT_URL}")
    print(f"Qdrant Collection Name: {QDRANT_COLLECTION_NAME}")
    print(f"Cohere API Key available: {'Yes' if COHERE_API_KEY else 'No'}")
    print(f"Groq API Key available: {'Yes' if GROQ_API_KEY else 'No'}")
    print(f"Qdrant API Key available: {'Yes' if QDRANT_API_KEY else 'No'}")


if __name__ == "__main__":
    # Example usage
    print("Environment Configuration:")
    validate_environment()
    print()
    print_config_info()