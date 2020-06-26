from google.oauth2 import id_token
from google.auth.transport import requests
import os

gclientId = os.getenv("GCLIENT")

def authorizer(token):
    print("tjolken", token)
