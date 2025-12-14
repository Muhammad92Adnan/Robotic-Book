"""
Example script demonstrating how to use URL and API from environment variables
"""

from config import QDRANT_URL, QDRANT_API_KEY, QDRANT_COLLECTION_NAME, COHERE_API_KEY
from api_utils import get_api_config, validate_environment, print_config_info
import requests


def main():
    print("Using environment variables for API configuration")
    print("="*50)

    # Validate environment
    if not validate_environment():
        print("Environment validation failed. Please check your .env file.")
        return

    print()

    # Print configuration info
    print_config_info()
    print()

    # Example: Using the configuration values
    print("Configuration values loaded from .env:")
    config = get_api_config()

    print(f"Qdrant URL: {config['qdrant_url']}")
    print(f"Collection Name: {config['qdrant_collection_name']}")

    # Example of using the values (not making actual API calls to avoid errors)
    print("\nValues are ready to be used in your application!")


if __name__ == "__main__":
    main()