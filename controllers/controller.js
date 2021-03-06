const User = require('../models/User');
const Post = require('../models/Post');

const bcrypt = require('bcrypt');

exports.getIndex = (req, res) => {
	res.render('pages/index.ejs', {msg: null})
};

exports.getLogin = (req, res) => {
	res.render('pages/login.ejs', {msg: null});
};

exports.getLoggedIn = (req, res) => {
    if (req.session.user) {
    	const userid = req.session.user.id;
    	const uname = req.session.user.username;
    	const fname = req.session.user.first_name;
    	const lname = req.session.user.last_name;
    	Post.findAll({ where: { userId: userid }})
    		.then(posts => {
    			res.render('pages/profile.ejs', {page_user: uname, first_name: fname, last_name: lname, posts: posts})
    		})
    		
    } else {
    	res.render('pages/profile.ejs', {page_user: null});
    }
};

exports.postIndex = (req, res) => {
	const first_name = req.body.first_name;
	const last_name = req.body.last_name;
	const email = req.body.email;
    const username = req.body.username;
    const passwd = req.body.passwd;
    const passwd2 = req.body.passwd2;

    if (passwd == passwd2) {
    	if (passwd.length >= 8 && passwd.length <= 16) {
		    const hashedPassword = bcrypt.hashSync(passwd, 10);
	    	User.create({
		    	first_name: first_name,
		    	last_name: last_name,
		    	email: email,
		        username: username,
		        passwd: hashedPassword
		    })
		    res.redirect('/login')
		} else {
			return res.render('pages/index', {msg: "password must be between 8 and 16 characters"});
		}
    } else {
    	return res.render('pages/index', {msg: "passwords do not match"});
    }
    
    // res.redirect('/login');
};

exports.postLogin = (req, res) => {
    const username = req.body.username;
    const passwd = req.body.passwd;
    User.findOne({ where: { username: username } })
	.then(user => {
		if (!user) {
			return res.render('pages/login', {msg: "invalid user"});
		}
		bcrypt
		.compare(passwd, user.passwd)
		.then(doMatch => {
			if (doMatch) {
				req.session.user = user;
				return res.redirect('/profile');
			}
			return res.render('pages/login', {msg: "invalid password"});
		})
		.catch(err => {
			console.log(err)
			return res.redirect('/login');
		})
	})
}

exports.postLogout = (req, res) => {
	req.session.destroy(err => {
		res.redirect('/');
	})
}

exports.postBlogPost = (req, res, next) => {
	const blogpost = req.body.content;
	const currentuserId = req.session.user.id;
	Post.create({content: blogpost, userId: currentuserId})
		.then(result => {
			return res.redirect('/profile');
		})
		.catch(err => {
			console.log(err);
		})
}

exports.getUpdatePost = (req, res, next) => {
	const pid = req.params.postId;
	Post.findByPk(pid)
	.then(post => {
		if (!post) {
			return res.redirect('/profile');
		}
		res.render("pages/update_post.ejs", {
			post: post
		})
	})
	.catch(err => {
		console.log(err);
	})
}

exports.postUpdatePost = (req, res, next) => {
	const pid = req.body.postId;
	const updatedCont = req.body.content;
	Post.findByPk(pid)
	.then(post => {
		post.content = updatedCont;
		return post.save();
	})
	.then(result => {
		res.redirect('/profile');
	})
	.catch(err => console.log(err));
}

exports.postDeletePost = (req, res, next) => {
	const pid = req.body.postId;
	Post.destroy({ where: { id: pid }})
	.then(result => {
		res.redirect('/profile');
	})
	.catch(err => { console.log(err) })
}