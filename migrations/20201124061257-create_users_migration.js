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
        first_name: {
          type: Sequelize.STRING(35),
          allowNull: false
        },
        last_name: {
          type: Sequelize.STRING(35),
          allowNull: false
        },
        email: {
          type: Sequelize.STRING(50),
          allowNull: false
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

