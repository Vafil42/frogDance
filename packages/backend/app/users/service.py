from flask import jsonify, make_response
from packages.backend.app.scripts import jwt_encode, jwt_decode
from datetime import datetime


class CompanyService:
    def __init__(self, db):
        self.db = db

    def getOne(self, headers):
        try:
            token = headers["Authorization"]
            login = jwt_decode(token)

            user = self.db.users.find_one({"login": login})

            if not user:
                return make_response(jsonify({
                    "message": "User not found",
                    "error": "Not Found",
                    "status": 404
                })), 404

            user["_id"] = str(user["_id"])

            return make_response(jsonify({
                "message": "User successfully found",
                "company": str(user),
                "status": 200
            })), 200

        except Exception as e:
            return make_response(jsonify({
                "message": "Server died!",
                "error": str(e),
                "status": 500
            })), 500

    def getUsers(self, headers):
        try:
            token = headers["Authorization"]
            login = jwt_decode(token)

            user = self.db.companies.find_one({"login": login})

            if not user:
                return make_response(jsonify({
                    "message": "Company not found",
                    "error": "Not Found",
                    "status": 404
                })), 404

            users = list(self.db.users.find({"authorId": str(user["_id"])}))
            for i in range(len(users)):
                users[i]["_id"] = str(users[i]["_id"])

            return make_response(jsonify({
                "message": "Company successfully found",
                "routes": users,
                "status": 200
            })), 200

        except Exception as e:
            return make_response(jsonify({
                "message": "Server died!",
                "error": str(e),
                "status": 500
            })), 500

    def create(self, body):
        try:
            user = self.db.users.find_one({"login": body["login"]})

            if user:
                return make_response(jsonify({
                    "message": "User with same login already exists",
                    "error": "Conflict",
                    "status": 409
                })), 409

            if len(body["password"]) < 8:
                return make_response(jsonify({
                    "message": "Invalid password format",
                    "error": "Bad Request",
                    "status": 400
                })), 400

            time_now = datetime.strftime(datetime.now(), "%d.%m.%Y %H:%M")
            body["createdAt"] = time_now
            body["updatedAt"] = time_now
            token = jwt_encode(body["login"])

            self.db.users.insert_one(body)

            body["_id"] = str(body["_id"])
            return make_response(jsonify({
                "message": "User created successfully",
                "company": body,
                "token": token,
                "status": 201
            })), 201

        except Exception as e:
            return make_response(jsonify({
                "message": "Server died!",
                "error": str(e),
                "status": 500
            })), 500

    def logIn(self, body):
        try:
            user = self.db.users.find_one({"login": body["login"]})

            if not user:
                return make_response(jsonify({
                    "message": "User not found",
                    "error": "Not Found",
                    "status": 404
                })), 404

            if body["password"] != user["password"]:
                return make_response(jsonify({
                    "message": "Invalid password",
                    "error": "Unauthorized",
                    "status": 401
                })), 401

            token = jwt_encode(body["login"])
            user["_id"] = str(user["_id"])
            return make_response(jsonify({
                "message": "Success",
                "company": user,
                "token": token,
                "status": 200
            })), 200

        except Exception as e:
            return make_response(jsonify({
                "message": "Server died!",
                "error": str(e),
                "status": 500
            })), 500

    def update(self, headers, body):
        try:
            token = headers["Authorization"]
            login = jwt_decode(token)

            user = self.db.users.find_one({"login": login})

            if not user:
                return make_response(jsonify({
                    "message": "User not found",
                    "error": "Not Found",
                    "status": 404
                })), 404

            if "password" in body.keys() and len(body["password"]) < 8:
                return make_response(jsonify({
                    "message": "Invalid password format",
                    "error": "Bad Request",
                    "status": 400
                })), 400

            time_now = datetime.strftime(datetime.now(), "%d.%m.%Y %H:%M")
            body["updatedAt"] = time_now

            self.db.users.update_one({"login": login}, {"$set": body})

            user["_id"] = str(user["_id"])

            return make_response(jsonify({
                "message": "User updated successfully",
                "company": body,
                "token": token,
                "status": 200
            })), 200

        except Exception as e:
            print(e)
            return make_response(jsonify({
                "message": "Server died!",
                "error": str(e),
                "status": 500
            })), 500

    def delete(self, headers):
        try:
            token = headers["Authorization"]
            login = jwt_decode(token)

            user = self.db.users.find_one({"login": login})

            if not user:
                return make_response(jsonify({
                    "message": "User not found",
                    "error": "No Found",
                    "status": 404
                })), 404

            self.db.users.delete_one({"login": login})

            return make_response(jsonify({
                "message": "User deleted successfully",
                "status": 200
            })), 200

        except Exception as e:
            return make_response(jsonify({
                "message": "Server died!",
                "error": str(e),
                "status": 500
            })), 500
