from flask import Blueprint, request


def init_controller(service):
    global companyService
    companyService = service


company_blueprint = Blueprint("company_api", __name__)


@company_blueprint.route("/companies/get-one", methods=["GET"])
def getOne(id):
    headers = request.headers
    return companyService.getOne(headers)


@company_blueprint.route("/companies/get-routes", methods=["GET"])
def getRoutes():
    headers = request.headers
    return companyService.getRoutes(headers)


@company_blueprint.route("/companies/create", methods=["POST"])
def create():
    return companyService.create(request.json)


@company_blueprint.route("/companies/log-in", methods=["POST"])
def logIn():
    return companyService.logIn(request.json)


@company_blueprint.route("/companies/update", methods=["PUT"])
def update():
    headers = request.headers
    return companyService.update(headers, request.json)


@company_blueprint.route("/companies/delete", methods=["DELETE"])
def delete():
    headers = request.headers
    return companyService.delete(headers)
