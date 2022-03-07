class Response {
    static async get(model) {
        const allNotes = await model.findAll();
        return JSON.stringify(allNotes, null, 2);
    }
}

module.exports = Response;