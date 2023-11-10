from flask import jsonify, make_response
from flask_pymongo import ObjectId
from datetime import datetime


class UserService:

    def __init__(self, db):
        self.db = db

    def getOne(self, id):
        try:
            user = self.db.routes.findOne({"_id": ObjectId(id)}, {})

            if not user:
                return make_response(jsonify({
                    "message": "Route not found",
                    "error": "Not found",
                    "status": 404
                })), 404
            return make_response(jsonify({
                "message": "Success",
                "route": str(user),
                "status": 200
            })), 200

        except Exception as e:
            return make_response(jsonify({
                "message": "ERROR",
                "error": str(e),
                "status": 500
            })), 500

    def getMany(self, body):
        try:
            users = [self.db.routes.findOne({"_id": ObjectId(i)}, {}) for i in body]

            if not users:
                return make_response(jsonify({
                    "message": "Route not found",
                    "error": "Not found",
                    "status": 404
                })), 404
            return make_response(jsonify({
                "message": "Success",
                "route": str(users),
                "status": 200
            })), 200

        except Exception as e:
            return make_response(jsonify({
                "message": "ERROR",
                "error": str(e),
                "status": 500
            })), 500

    def create(self, body):
        try:
            user_checkout = self.db.users.find_one({"login": body["login"]})
            if user_checkout:
                return make_response(jsonify({
                    "message": "This user login is already occupiedd",
                    "error": "Conflict",
                    "status": 409
                })), 409
            time_now = datetime.now()
            FORMAT = "%d.%m.%y %H:%M"
            time_work = datetime.strftime(time_now, FORMAT)
            body["createdAt"] = str(time_work)
            body["updatedAt"] = str(time_work)
            user = self.db.users.insert_one(body)

            return make_response(jsonify({
                "message": "Success",
                "route": str(user),
                "status": 201
            })), 201

        except Exception as e:
            return make_response(jsonify({
                "message": "ERROR",
                "error": str(e),
                "status": 500
            })), 500

    def update(self, id, body):
        try:
            time_now = datetime.now()
            FORMAT = "%d.%m.%y %H:%M"
            time_work = datetime.strftime(time_now, FORMAT)
            body["updatedAt"] = str(time_work)
            user = self.db.routes.update_one({"_id": ObjectId(id)}, {"$set": body})

            if not user:
                return make_response(jsonify({
                    "message": "Route not found",
                    "error": "Not found",
                    "status": 404
                })), 404
            return make_response(jsonify({
                "message": "Success",
                "route": str(user),
                "status": 200
            })), 200

        except Exception as e:
            return make_response(jsonify({
                "message": "ERROR",
                "error": str(e),
                "status": 500
            })), 500

    def delete(self, id):
        try:
            user = self.db.routes.find_one({"_id": ObjectId(id)})

            if not user:
                return make_response(jsonify({
                    "message": "Route not found",
                    "error": "Not found",
                    "status": 404
                })), 404
            self.db.routes.delete_one({"_id": ObjectId(id)})
            return make_response(jsonify({
                "message": "Success",
                "status": 200
            })), 200

        except Exception as e:
            return make_response(jsonify({
                "message": "ERROR",
                "error": str(e),
                "status": 500
            })), 500


