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

		browser.driver.wait(function() {
    		return browser.driver.findElement(by.id('entrar')).isDisplayed();
		}, 30000);

		browser.driver.findElement(by.id('entrar')).click();
		browser.driver.findElement(by.id('login_field'))
		//.sendKeys(config.seleniumUser);
		.sendKeys('XinubeApps');
		browser.driver.findElement(by.id('password'))
		//.sendKeys(config.seleniumUserPassword);
		.sendKeys('cavera123');
		browser.driver.findElement(by.name('commit')).click();
	}
};
