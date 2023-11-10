from flask import Blueprint, request


def init_controller(service):
    global companyService
    companyService = service


company_blueprint = Blueprint("company_api", __name__)


@company_blueprint.route("/companies/get-one/<string:id>", methods=["GET"])
def getOne(id):
    return companyService.getOne(id)


@company_blueprint.route("/companies/get-many", methods=["GET"])
def getMany():
    return companyService.getMany()


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
def delete(id):
    return companyService.delete(id)
