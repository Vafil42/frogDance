from packages.backend.app import create_app


app = create_app()


@app.route("/")
@app.route("/index")
def hello():
    return "Hello, world!"


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)