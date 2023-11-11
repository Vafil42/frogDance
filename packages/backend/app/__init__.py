from flask import Flask
from flask_login import LoginManager
from packages.backend.app.config import Config
from packages.backend.app.database import init_db
from packages.backend.app.routes.controller import init_controller as route_controller, route_blueprint
from packages.backend.app.routes.service import RouteService
from packages.backend.app.companies.controller import init_controller as company_controller, company_blueprint
from packages.backend.app.companies.service import CompanyService
from flask_cors import CORS


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    cors = CORS(app, supports_credentials=True)
    app.config['CORS_HEADERS'] = 'Content-Type'
    db = init_db(app)
    loginManager = LoginManager()
    loginManager.init_app(app)

    routeService = RouteService(db)
    route_controller(routeService)
    app.register_blueprint(route_blueprint)

    companyService = CompanyService(db)
    company_controller(companyService)
    app.register_blueprint(company_blueprint)

    return app
