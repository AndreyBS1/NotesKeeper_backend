'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('notes', [{
      note_title: 'John Doe',
      note_text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Aliquam lobortis ante sapien, at luctus libero viverra vitae.',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('notes', null, {});
  }
};
