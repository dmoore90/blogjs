'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Users', { 
        id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },

        username: {
          type: Sequelize.STRING(35),
          allowNull: false,
          unique: true
        },
        passwd: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Users');
  }
};
