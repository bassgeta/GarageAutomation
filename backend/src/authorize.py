from fastapi.responses import JSONResponse
from google.oauth2 import id_token
from google.auth.transport import requests
import os

DELIMITER = '|'
gclientId = os.getenv("GCLIENT")
emailWhitelist = os.getenv("ALLOWED_EMAILS")

def authorizer(token):
    emails = emailWhitelist.split(DELIMITER)
    try:
        idinfo = id_token.verify_oauth2_token(token, requests.Request(), gclientId)
        if idinfo['email'] in emails:
            return JSONResponse(status_code = 200)
        else:
            raise ValueError("User's email not in the whitelist")
    except ValueError:
        # Invalid token
        return JSONResponse(status_code = 403)
