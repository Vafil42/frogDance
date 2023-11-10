from flask import jsonify, make_response
from flask_pymongo import ObjectId
from datetime import datetime


class CompanyService:
    def __init__(self, db):
        self.db = db

    async def getOne(self, id):
        try:
            user = self.db.companies.find_one({"_id": ObjectId(id)})

            return make_response(jsonify({
                "message": "Company created successfully",
                "company": str(user),
                "status": 201
            })), 201

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
            time_now = datetime.strftime(datetime.now(), "%d.%m.%Y %H:%M")
            body["createdAt"] = time_now
            body["updatedAt"] = time_now

            self.db.companies.insert_one(body)

            return make_response(jsonify({
                "message": "Company created successfully",
                "company": body,
                "status": 201
            })), 201

        except Exception as e:
            return make_response(jsonify({
                "message": "Server died!",
                "error": str(e),
                "status": 500
            })), 500

    def logIn(self, body):
        pass

    def update(self, id, body):
        pass

    def delete(self, id):
        pass

