from flask import jsonify, make_response
from flask_pymongo import ObjectId
from datetime import datetime
from packages.backend.app.scripts import jwt_decode


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

    def create(self, headers, body):
        try:
            token = headers["Authorization"]
            login = jwt_decode(token)
            author = self.db.companies.find_one({"login": login}, {"_id": 1})
            time_now = datetime.now()
            FORMAT = "%d.%m.%y %H:%M"
            time_work = datetime.strftime(time_now, FORMAT)
            body["createdAt"] = str(time_work)
            body["updatedAt"] = str(time_work)
            body["authorId"] = author
            route = self.db.routes.insert_one(body)

            if not route:
                return make_response(jsonify({
                    "message": "Route not found",
                    "error": "Not found",
                    "status": 404
                })), 404
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

    def update(self, id, headers, body):
        try:
            token = headers["Authorization"]
            login = jwt_decode(token)
            author = self.db.companies.find_one({"login": login}, {"_id": 1})
            route = self.db.routes.find_one({"_id": ObjectId(id)})

            if not route:
                return make_response(jsonify({
                    "message": "Route not found",
                    "error": "Not found",
                    "status": 404
                })), 404

            if author != route["authorId"]:
                return make_response(jsonify({
                    "message": "You are not an author of this route",
                    "error": "Forbidden",
                    "status": 403
                })), 403

            time_now = datetime.now()
            FORMAT = "%d.%m.%y %H:%M"
            time_work = datetime.strftime(time_now, FORMAT)
            body["updatedAt"] = str(time_work)
            route = self.db.routes.update_one({"_id": ObjectId(id)}, {"$set": body})
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

    def delete(self, headers, id):
        try:
            token = headers["Authorization"]
            login = jwt_decode(token)
            author = self.db.companies.find_one({"login": login}, {"_id": 1})
            route = self.db.routes.find_one({"_id": ObjectId(id)})

            if not route:
                return make_response(jsonify({
                    "message": "Route not found",
                    "error": "Not found",
                    "status": 404
                })), 404

            if author != route["authorId"]:
                return make_response(jsonify({
                    "message": "You are not an author of this route",
                    "error": "Forbidden",
                    "status": 403
                })), 403

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
