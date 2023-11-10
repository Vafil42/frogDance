from app import create_app
from flask import request


app = create_app()


@app.route("/")
@app.route("/index")
def hello():
    return "Hello, world!"


@app.route("/get", methods=["POST"])
def get():
    return request.json


if __name__ == "__main__":
    app.run(host="localhost", port=8080)