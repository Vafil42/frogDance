from flask import Flask
from packages.backend.app.config import Config
from packages.backend.app.database import init_db


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    db = init_db(app)

    return app
