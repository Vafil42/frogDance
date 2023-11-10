import jwt
from packages.backend.app.config import Config


def jwt_encode(login):
    secret_key = Config.SECRET_KEY
    salt = Config.SALT
    token = jwt.encode({"login": login, "salt": salt}, secret_key, algorithm="HS256")
    return token


def jwt_decode(token):
    secret_key = Config.SECRET_KEY
    login = jwt.decode(token, secret_key, algorithms=["HS256"])["login"]
    return login
