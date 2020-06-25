from google.oauth2 import id_token
from google.auth.transport import requests
import os

name = os.getenv("GCLIENT")
print("the", name)

def authorizer(token):
    print("tjolken", token)
