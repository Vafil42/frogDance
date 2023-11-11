from flask import Blueprint, request


def init_controller(service):
    global routeService
    routeService = service


route_blueprint = Blueprint("route_api", __name__)


@route_blueprint.route("/routes/get-one/<string:id>", methods=["GET"])
def getOne(id):
    return routeService.getOne(id)


@route_blueprint.route("/routes/get-favorites", methods=["POST"])
def getFavorites():
    body = request.json
    return routeService.getFavorites(body)


@route_blueprint.route("/routes/create", methods=["POST"])
def create():
    return routeService.create(request.headers, request.json)


@route_blueprint.route("/routes/update/<string:id>", methods=["PUT"])
def update(id):
    return routeService.update(id, request.headers, request.json)


@route_blueprint.route("/routes/delete/<string:id>", methods=["DELETE"])
def delete(id):
    return routeService.delete(id, request.headers)

# обработчик запросов
