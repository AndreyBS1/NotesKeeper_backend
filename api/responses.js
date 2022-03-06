const Notes = require('../db/models/notes');

class Response {
    static async get(res) {
        res.send(
            'Get request\n\n' +
            'Notes model (check):\n' + Notes()
        );
    }
}

module.exports = Response;