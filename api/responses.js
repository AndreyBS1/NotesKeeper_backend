const db = require('../db/models/index');

class Response {
    static async get() {
        const allNotes = await db.notes.findAll();
        return JSON.stringify(allNotes, null, 2);
    }
}

module.exports = Response;