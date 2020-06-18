const Sequelize = require("sequelize");

const sequelize = new Sequelize("blog", 'user', 'pass', { 
	host: 'localhost', 
	dialect: "mysql", 
	// operatorsAliases: false
});

module.exports = sequelize;