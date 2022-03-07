const db = require('../db/models/index');
const { DataTypes } = require('sequelize');
const NotesModel = require('../db/models/notes')(db.sequelize, DataTypes);

class Response {
    static async get(res) {
        const allNotes = await NotesModel.findAll()
        res.send(
            'Get request\n\n' +
            'Notes model (check):\n' + JSON.stringify(allNotes, null, 2)
        );
    }
}

module.exports = Response;