from flask import jsonify, make_response
from flask_pymongo import ObjectId
from datetime import datetime


class RouteService:

    def __init__(self, db):
        self.db = db

    def getOne(self, id):
        try:
            route = self.db.routes.findOne({"_id": ObjectId(id)}, {})

            if not route:
                return make_response(jsonify({
                    "message": "Route not found",
                    "error": "Not found",
                    "status": 404
                })), 404
            route["_id"] = str(route["_id"])
            return make_response(jsonify({
                "message": "Success",
                "route": str(route),
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
            routes = [self.db.routes.findOne({"_id": ObjectId(i)}, {}) for i in body]

            if not routes:
                return make_response(jsonify({
                    "message": "Route not found",
                    "error": "Not found",
                    "status": 404
                })), 404
            return make_response(jsonify({
                "message": "Success",
                "route": str(routes),
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
            time_now = datetime.now()
            FORMAT = "%d.%m.%y %H:%M"
            time_work = datetime.strftime(time_now, FORMAT)
            body["createdAt"] = str(time_work)
            body["updatedAt"] = str(time_work)
            route = self.db.routes.insert_one(body)

            if not route:
                return make_response(jsonify({
                    "message": "Route not found",
                    "error": "Not found",
                    "status": 404
                })), 404
            body["_id"] = str(body["_id"])
            return make_response(jsonify({
                "message": "Success",
                "route": body,
                "status": 200
            })), 200

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
            route = self.db.routes.update_one({"_id": ObjectId(id)}, {"$set": body})

            if not route:
                return make_response(jsonify({
                    "message": "Route not found",
                    "error": "Not found",
                    "status": 404
                })), 404
            route["_id"] = str(route["_id"])
            return make_response(jsonify({
                "message": "Success",
                "route": str(route),
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
            route = self.db.routes.find_one({"_id": ObjectId(id)})

            if not route:
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
