from flask import Flask
from packages.backend.app.config import Config
from packages.backend.app.database import init_db
from packages.backend.app.routes.controller import init_controller as route_controller, route_blueprint
from packages.backend.app.routes.service import RouteService
from packages.backend.app.companies.controller import init_controller as company_controller, company_blueprint
from packages.backend.app.companies.service import CompanyService


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    db = init_db(app)

    routeService = RouteService(db)
    route_controller(routeService)
    app.register_blueprint(route_blueprint)

    companyService = CompanyService(db)
    company_controller(companyService)
    app.register_blueprint(company_blueprint)

    return app
