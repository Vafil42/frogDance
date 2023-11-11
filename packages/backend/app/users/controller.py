from flask import Blueprint, request


def init_controller(service):
    global userService
    userService = service


user_blueprint = Blueprint("user_api", __name__)


@user_blueprint.route("/users/get-one/<string:id>", methods=["GET"])
def getOne():
    headers = request.headers
    return userService.getOne(headers)


@user_blueprint.route("/users/get-users", methods=["GET"])
def getUsers():
    headers = request.headers
    return userService.getUsers(headers)


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
