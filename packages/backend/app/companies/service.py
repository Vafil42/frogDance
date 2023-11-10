from flask import jsonify, make_response
from packages.backend.app.scripts import jwt_encode, jwt_decode
from flask_pymongo import ObjectId
from datetime import datetime


class CompanyService:
    def __init__(self, db):
        self.db = db

    async def getOne(self, id):
        try:
            company = self.db.companies.find_one({"_id": ObjectId(id)})

            if not company:
                return make_response(jsonify({
                    "message": "Company not found",
                    "error": "Not Found",
                    "status": 404
                })), 404

            return make_response(jsonify({
                "message": "Company successfully found",
                "company": str(company),
                "status": 200
            })), 200

        except Exception as e:
            return make_response(jsonify({
                "message": "Server died!",
                "error": str(e),
                "status": 500
            })), 500

    def getMany(self):
        pass

    async def create(self, body):
        try:
            company = self.db.companies.find_one({"login": body["login"]})

            if company:
                return make_response(jsonify({
                    "message": "Company with same login already exists",
                    "error": "Conflict",
                    "status": 409
                })), 409

            if len(body["password"]) < 8:
                return make_response(jsonify({
                    "message": "Company not found",
                    "error": "Not Found",
                    "status": 404
                })), 400

            time_now = datetime.strftime(datetime.now(), "%d.%m.%Y %H:%M")
            body["createdAt"] = time_now
            body["updatedAt"] = time_now
            token = jwt_encode(body["login"])

            self.db.companies.insert_one(body)

            return make_response(jsonify({
                "message": "Company created successfully",
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
            company = self.db.companies.find_one({"login": body["login"]})

            if not company:
                return make_response(jsonify({
                    "message": "Company not found",
                    "error": "Not Found",
                    "status": 404
                })), 404

            if body["password"] != company["password"]:
                return make_response(jsonify({
                    "message": "Invalid password",
                    "error": "Unauthorized",
                    "status": 401
                })), 401

            token = jwt_encode(body["login"])

            return make_response(jsonify({
                "message": "Success",
                "company": company,
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

            company = self.db.companies.find_one({"login": login})

            if not company:
                return make_response(jsonify({
                    "message": "Company not found",
                    "error": "Not Found",
                    "status": 404
                })), 404

            if len(body["password"]) < 8:
                return make_response(jsonify({
                    "message": "Invalid password format",
                    "error": "Bad Request",
                    "status": 400
                })), 400

            time_now = datetime.strftime(datetime.now(), "%d.%m.%Y %H:%M")
            body["updatedAt"] = time_now

            self.db.companies.update_one({"login": login}, body)

            return make_response(jsonify({
                "message": "Company updated successfully",
                "company": body,
                "token": token,
                "status": 200
            })), 200

        except Exception as e:
            return make_response(jsonify({
                "message": "Server died!",
                "error": str(e),
                "status": 500
            })), 500

    def delete(self, headers):
        try:
            token = headers["Authorization"]
            login = jwt_decode(token)

            company = self.db.companies.find_one({"login": login})

            if not company:
                return make_response(jsonify({
                    "message": "Company not found",
                    "error": "Not Found",
                    "status": 404
                })), 404

            self.db.companies.delete_one({"login": login})

            return make_response(jsonify({
                "message": "Company deleted successfully",
                "status": 200
            })), 200

        except Exception as e:
            return make_response(jsonify({
                "message": "Server died!",
                "error": str(e),
                "status": 500
            })), 500
