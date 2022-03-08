class Response {
    static async get(model) {
        const allNotes = await model.findAll();
        return allNotes;
    }
}

module.exports = Response;