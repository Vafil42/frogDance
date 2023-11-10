from flask import Flask
from packages.backend.app.config import Config
from packages.backend.app.database import init_db
from packages.backend.app.routes.controller import init_controller, route_blueprint
from packages.backend.app.routes.service import RouteService


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    db = init_db(app)

    routeService = RouteService(db)
    init_controller(routeService)
    app.register_blueprint(route_blueprint)

    return app
