from flask import Blueprint, request


def init_controller(service):
    global userService
    userService = service


user_blueprint = Blueprint("user_api", __name__)


@user_blueprint.route("/users/get-one/<string:id>", methods=["GET"])
def getOne(id):
    return userService.getOne(id)


@user_blueprint.route("/users/get-many", methods=["GET"])
def getMany():
    return userService.getMany()


@user_blueprint.route("/users/create", methods=["POST"])
def create():
    return userService.create(request.json)


@user_blueprint.route("/users/log-in", methods=["POST"])
def logIn():
    return userService.logIn(request.json)


@user_blueprint.route("/users/update", methods=["PUT"])
def update():
    headers = request.headers
    return userService.update(headers, request.json)


@user_blueprint.route("/users/delete", methods=["DELETE"])
def delete():
    headers = request.headers
    return userService.delete(headers)
