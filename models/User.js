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

const connection = require('../db/connection');

const User = connection.define("Users", {
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
	}
})

module.exports = User;