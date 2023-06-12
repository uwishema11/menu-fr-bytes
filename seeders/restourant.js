

'use strict';
import bcryptjs from 'bcryptjs';
const { hash } = bcryptjs;

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Restourant',
      [
        {
          id: 'e2ebed47-fc43-4655-b01a-1af869b9400b',
          name: 'SHEKINA',
          description: 'Delectable Chinese Cuisine',
          hours: 'Mon - Fri 9:00 am to 9:00 pm, Weekends 10:00 am to 11:00 pm',
          telephone: '6175551212',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'e3ebed47-fc43-4655-b01a-1af869b9400b',
          name: 'TEST',
          description: 'Delectable Italian Cuisine',
          hours: 'Mon - Fri 9:00 am to 9:00 pm, Weekends 10:00 am to 11:00 pm',
          telephone: '6175551212',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'e4ebed47-fc43-4655-b01a-1af869b9400b',
          name: 'UMUCYO',
          description: 'Delectable Rwandan Cuisine',
          hours: 'Mon - Fri 9:00 am to 9:00 pm, Weekends 10:00 am to 11:00 pm',
          telephone: '6175551212',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
