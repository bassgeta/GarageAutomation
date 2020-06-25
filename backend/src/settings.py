from dotenv import load_dotenv
from pathlib import Path  # Python 3.6+ only

env_path = Path('../')
print("peff", env_path)

load_dotenv(dotenv_path = env_path)
