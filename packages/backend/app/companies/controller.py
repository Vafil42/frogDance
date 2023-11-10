from flask import Blueprint, request


def init_controller(service):
    global companyService
    companyService = service


company_blueprint = Blueprint("company_api", __name__)


@company_blueprint.route("/companies/get-one/<string:id>", methods=["GET"])
async def getOne(id):
    return await companyService.getOne(id)


@company_blueprint.route("/companies/get-many", methods=["GET"])
async def getMany():
    return await companyService.getMany()


@company_blueprint.route("/companies/get-one", methods=["POST"])
async def create():
    return await companyService.create(request.json)


@company_blueprint.route("/companies/get-one", methods=["POST"])
async def logIn():
    return await companyService.logIn(request.json)


@company_blueprint.route("/companies/get-one/<string:id>", methods=["PUT"])
async def update(id):
    headers = request.headers
    return await companyService.update(headers, request.json)


@company_blueprint.route("/companies/get-one/<string:id>", methods=["DELETE"])
async def delete(id):
    return await companyService.delete(id)
