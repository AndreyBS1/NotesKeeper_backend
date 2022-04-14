class Response {
  static async getAll(model) {
    const allNotes = await model.findAll();
    return allNotes;
  }
  static async getOne(model, id) {
    const oneNote = await model.findAll({ where: { id: id } });
    return oneNote;
  }

  static async post(model, data) {
    const newNote = await model.create({
      note_title: data.note_title,
      note_text: data.note_text,
    });
    return newNote instanceof model;
  }

  static async put(model, data) {
    await model.update(
      {
        note_title: data.note_title,
        note_text: data.note_text,
      },
      {
        where: {
          id: data.id,
        },
      }
    );
  }

  static async delete(model, data) {
    await model.destroy({
      where: {
        id: data.id,
      },
    });
  }
}

module.exports = Response;
