from flask import jsonify, make_response
from flask_pymongo import ObjectId
import datetime

class RouteService:

    def __init__(self, db):
        self.db = db

    async def getOne(self, id):
        try:
            route = await self.db.routes.findOne({"_id": ObjectId(id)}, {})

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

    async def getMany(self, body):
        try:
            routes = [await self.db.routes.findOne({"_id": ObjectId(i)}, {}) for i in body]

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

    async def create(self, body):
        try:
            body["createdAt"] = str(datetime.datetime.now())
            body["updatedAt"] = str(datetime.datetime.now())
            route = await self.db.routes.insert_one(body)

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

    async def update(self, id, body):
        try:
            body["updatedAt"] = str(datetime.datetime.now())
            route = await self.db.routes.update_one({"_id": ObjectId(id)}, {"$set": body})

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

    async def delete(self, id):
        try:
            route = await self.db.routes.find_one({"_id": ObjectId(id)})

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
