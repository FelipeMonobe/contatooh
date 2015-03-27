// public/js/controllers/ContatoController.js

(function() {
	"use strict";

	angular
	.module('contatooh')
	.controller('ContatoController', contatoController);

	contatoController.$inject = ['$routeParams', 'Contato'];

	function contatoController($routeParams, Contato) {
		var vm = this;

		vm.contato = $routeParams.contatoId == undefined ? new Contato() : resgataContato();
		vm.contatos = [];
		vm.mensagem = {texto: ''};
		vm.salvar = salvar;

		(function init() {
			Contato.query(function (contatos) {
				vm.contatos = contatos;
			});
		})();

		function salvar() {
			vm.contato.$save()
			.then(function () {
				vm.mensagem.texto = 'Salvo com sucesso';
				vm.contato = new Contato();
			})
			.catch(function (erro) {
				vm.mensagem.texto = 'Não foi possível salvar';
			});
		}

		function resgataContato() {
			Contato.get({id: $routeParams.contatoId},
				function (contato) {
					vm.contato = contato;
				},
				function (erro) {
					vm.mensagem.texto = 'Não foi possível obter o contato'; 
					console.log(erro);
				}
			);
		}
	}
})();