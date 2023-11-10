from flask import Blueprint, request


def init_controller(service):
    global userService
    userService = service


user_blueprint = Blueprint("user_api", __name__)


@user_blueprint.route("/users/get-one/<string:id>", methods=["GET"])
def getOne(id):
    return userService.getOne(id)


@user_blueprint.route("/users/get-many", methods=["POST"])
def getMany():
    return userService.getMany(request.json)


@user_blueprint.route("/users/create", methods=["POST"])
def create():
    return userService.create(request.json)


@user_blueprint.route("/users/update/<string:id>", methods=["PUT"])
def update(id):
    return userService.update(id, request.h)


@user_blueprint.route("/users/delete/<string:id>", methods=["DELETE"])
def delete(id):
    return userService.delete(id)
