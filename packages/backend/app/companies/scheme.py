from collections import OrderedDict


def create_schema(database):
    global db
    db = database


company_schema = {
    "name": {
        "type": "string",
        "required": True
    },
    "email": {
        "type": "string",
        "required": True
    },
    "password": {
        "type": "string",
        "required": True
    },
    "description": {
        "type": "string",
        "required": True
    },
    "routes": {
    }
}