const User = require('../models/User');

const bcrypt = require('bcrypt');

exports.getIndex = (req, res) => {
	res.render('pages/index.ejs')
};

exports.postIndex = (req, res) => {
	const username = req.body.username;
	const passwd = req.body.passwd;
	const hashedPassword = bcrypt.hashSync(passwd, 10);
	User.create({
		username: username,
		passwd: hashedPassword
	})
	res.redirect('/');
};

exports.getLogin = (req, res) => {
	res.render('pages/login.ejs');
}

exports.postLogin = (req, res) => {
    const username = req.body.username;
    const passwd = req.body.passwd;
    loggedIn = false;
    User.findOne({ where: { username: username } })
	.then(user => {
		if (!user) {
			return res.render('pages/login');
		}
		bcrypt
		.compare(passwd, user.passwd)
		.then(doMatch => {
			if (doMatch) {
				return res.render('pages/logged_in', { loggedIn: true , username: username });
			}
			return res.render('pages/login');
		})
		.catch(err => {
			console.log(err)
			return res.render('pages/login');
		})
	})
}