const db = require('../db/models/index');
const { DataTypes } = require('sequelize');
const Notes = require('../db/models/notes')(db.sequelize, DataTypes);

class Response {
    static async get(res) {
        res.send(
            'Get request\n\n' +
            'Notes model (check):\n' + typeof(Notes)
        );
    }
}

module.exports = Response;