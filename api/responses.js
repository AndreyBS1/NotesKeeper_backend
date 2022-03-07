const db = require('../db/models/index');
// const { DataTypes } = require('sequelize');
// const NotesModel = require('../db/models/notes')(db.sequelize, DataTypes);

class Response {
    static get() {
        // const allNotes = await NotesModel.findAll();
        // return JSON.stringify(allNotes, null, 2);
        return db
    }
}

module.exports = Response;