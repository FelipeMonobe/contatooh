// config/passport.js

var passport = require('passport');
var gitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function () {
	var Usuario = mongoose.model('Usuario');

	passport.use(new gitHubStrategy(
	{
		clientID: 'b2f174b878a8e9bea1d0',
		clientSecret: '9ba9c33634199e0faf55fd93fb8199c645959c03',
		callbackURL: 'http://localhost:3000/auth/github/callback'
	},
	function (accessToken, refreshToken, profile, done) {
		Usuario.findOrCreate(
			{ "login": profile.username },
			{ "nome": profile.username },
			function (erro, usuario) {
				if(erro){
					console.log(erro);
					return done(erro);
				}
				return done(null, usuario);
			}
		); 
	}));

	passport.serializeUser(function (usuario, done) {
		done(null, usuario._id);
	});

	passport.deserializeUser(function (id, done) {
		Usuario.findById(id).exec()
		.then(function (usuario) {
			done(null, usuario);
		});
	});
}