from flask import jsonify, make_response
from flask_pymongo import ObjectId
from datetime import datetime
from packages.backend.app.scripts import jwt_decode


class RouteService:

    def __init__(self, db):
        self.db = db

    def getOne(self, id):
        try:
            route = self.db.routes.find_one({"_id": ObjectId(id)}, {})

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

    def getFavorites(self, body):
        try:
            routes = []
            for i in body:
                route = self.db.routes.find_one({"_id": ObjectId(i)},
                                                {"id": 1, "name": 1, "description": 1, "image": 1,
                                                 "points": 1, "authorId": 1})
                company = self.db.companies.find_one({"_id": ObjectId(route["authorId"])},
                                                     {"id": 1, "name": 1, "description": 1, "image": 1})
                if not route:
                    return make_response(jsonify({
                        "message": "Route not found",
                        "error": "Not found",
                        "status": 404
                    })), 404
                if not company:
                    return make_response(jsonify({
                        "message": "Company not found",
                        "error": "Not found",
                        "status": 404
                    })), 404

                route["_id"] = str(route["_id"])
                company["_id"] = str(company["_id"])
                route["company"] = company
                del route["authorId"]
                routes.append(route)

            return make_response(jsonify({
                "message": "Success",
                "route": routes,
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
            body["authorId"] = str(author["_id"])
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

            if str(author["_id"]) != route["authorId"]:
                return make_response(jsonify({
                    "message": "You are not an author of this route",
                    "error": "Forbidden",
                    "status": 403
                })), 403

            time_now = datetime.now()
            FORMAT = "%d.%m.%y %H:%M"
            time_work = datetime.strftime(time_now, FORMAT)
            body["updatedAt"] = str(time_work)
            self.db.routes.update_one({"_id": ObjectId(id)}, {"$set": body})
            print(body)
            return make_response(jsonify({
                "message": "Success",
                "route": str(body),
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

            if str(author["_id"]) != route["authorId"]:
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

    def getAll(self):
        try:
            route = self.db.companies.find_many()

            if not route:
                return make_response(jsonify({
                    "message": "Company not found",
                    "error": "Not Found",
                    "status": 404
                })), 404

            routes = list(self.db.users.find({"authorId": str(route["_id"])}))
            for i in range(len(routes)):
                routes[i]["_id"] = str(routes[i]["_id"])

            return make_response(jsonify({
                "message": "Company successfully found",
                "routes": routes,
                "status": 200
            })), 200

        except Exception as e:
            return make_response(jsonify({
                "message": "Server died!",
                "error": str(e),
                "status": 500
            })), 500
