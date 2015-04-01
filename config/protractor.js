// config/protractor.js

var config = require('./config')();

exports.config = {
	sauceUser: config.sauceUser,
	sauceKey: config.sauceKey,
	capabilities: {
		'name': config.sauceTestName,
		'browserName': 'chrome',
		'tunnel-identifier': config.travisJobNumber,
		'build': config.travisBuild
	},

	specs: ['../test/e2e/**/*.js'],
	onPrepare: function () {
		browser.driver.get('http://localhost:3000');

		browser.findElements(by.id('entrar'))
		.then(function(elements) {
			if (elements.length) {
				browser.driver.findElement(by.id('entrar')).click();
				browser.driver.findElement(by.id('login_field'))
				.sendKeys('XinubeApps');
				browser.driver.findElement(by.id('password'))
				.sendKeys('cavera123');
				browser.driver.findElement(by.name('commit')).click();
			}
      });
	}
};
