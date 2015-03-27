// test/e2e/pages/contatoPage.js

var contatoPage = function () {
	this.visitar = function () {
		browser.get('http://localhost:3000/#/contato');
	};

	this.digitarNome = function (nome) {
		element(by.model('vm.contato.nome')).sendKeys(nome);
	};

	this.digitarEmail = function (email) {
		element(by.model('vm.contato.email')).sendKeys(email);
	};

	this.salvar = function () {
		element(by.css('.btn-primary')).click();
	};

	this.obterMensagem = function () {
		return element(by.binding('vm.mensagem.texto')).getText();
	};

	this.selecionarPrimeiraEmergenciaDaLista = function () {
		element(by.css('option[value="0"]')).click();
	};
}

module.exports = contatoPage;