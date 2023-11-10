from app import create_app
from app.scripts import jwt_encode, jwt_decode


app = create_app()


@app.route("/")
@app.route("/index")
def hello():
    token = jwt_decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6IkFsZXhhbmRyMDEwNDA2Iiwic2FsdCI6InN1Z2FyIn0._hIog-WVHxmMZHWqX5E09hlHyrWOnq7LUYQqyaGizXs")
    print(token)
    return token


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)