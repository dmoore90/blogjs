// const Sequelize = require('sequelize');

// module.exports = Sequelize.define("User", {
// 	id: {
// 		type: Sequelize.INTEGER(11),
// 		allowNull: false,
// 		autoIncrement: true,
// 		primaryKey: true,
// 	},

// 	username: {
// 		type: Sequelize.STRING(35),
// 		allowNull: false,
// 		unique: true
// 	},
// 	passwd: {
// 		type: Sequelize.STRING(20),
// 		allowNull: false,
// 	}
// })

const Sequelize = require('sequelize');

const sequelize = require('../db/connection');

const User = sequelize.define("Users", {
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
	}
})

module.exports = User;