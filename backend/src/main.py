from fastapi import FastAPI, Header
import settings
from authorize import authorizer

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/authorize")
def authorize_google_user(Authorization: str = Header(None)):
    return authorizer(Authorization)
