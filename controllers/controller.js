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
loggedIn = false;
exports.getLoggedIn = (req, res) => {
    res.render('pages/logged_in.ejs');
}

exports.postLogin = (req, res) => {
    const username = req.body.username;
    const passwd = req.body.passwd;
    loggedIn = true;
    User.findOne({ where: { username: username } })
	.then(user => {
		if (!user) {
			return res.render('pages/login');
		}
		bcrypt
		.compare(passwd, user.passwd)
		.then(doMatch => {
			if (doMatch) {
                loggedIn = true;
				return res.redirect('/logged_in');
			}
			return res.redirect('/login');
		})
		.catch(err => {
			console.log(err)
			return res.render('/login');
		})
	})
}

