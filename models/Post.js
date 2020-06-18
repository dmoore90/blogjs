// const Sequelize = require('sequelize');

// module.exports = sequelize.define("Post", {

// 	id: {
// 		type: Sequelize.INTEGER(11),
// 		allowNull: false,
// 		autoIncrement: true,
// 		primaryKey: true,
// 	},

// 	content: Sequelize.STRING(300),
// 	userId: Sequelize.INTEGER(11),
// 	createdAt: Sequelize.DATE,
// 	updatedAt: Sequelize.DATE
// })

const Sequelize = require('sequelize');
const sequelize = require('../db/connection');

const Post = sequelize.define("Posts", {
	id: {
		type: Sequelize.INTEGER(11),
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
	},
	content: Sequelize.STRING(300),
	userId: Sequelize.INTEGER(11),
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE
})

module.exports = Post;