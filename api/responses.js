const Notes = require('./db/models/notes');

class Response {
    static async get(req, res) {
        res.send(
            'Get request\n\n' +
            'Request body:\n' + req +
            '\nNotes model (check):\n' + Notes
        );
    }
}

module.exports = Response;