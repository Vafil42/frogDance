from flask_pymongo import PyMongo


def init_db(app):
    mongodb_client = PyMongo(app, uri=app.config["DATABASE_URI"])
    db = mongodb_client.db
    return db
