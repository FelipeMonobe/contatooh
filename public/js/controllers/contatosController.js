// public/js/controllers/ContatosController.js

(function() {
	"use strict";

	angular
	.module('contatooh')
	.controller('ContatosController', contatosController);

	contatosController.$inject = ['Contato'];

	function contatosController(Contato) {
		var vm = this;

		vm.admissao = new Date();
		vm.buscaContatos = buscaContatos;
		vm.contatos = [];
		vm.exibir = true;
		vm.filtro = '';
		vm.init = init;
		vm.mensagem = {texto: ''};
		vm.remove = remove;
		vm.salario = 100.12;

		vm.init();

		Contato.query(function (contatos) {
			vm.contatos = contatos;
		})

		function buscaContatos() {
			Contato.query(
				function(contatos) {
					vm.contatos = contatos;
				},
				function(erro) {
					vm.mensagem.texto = 'Não foi possível obter a lista de contatos';
					console.log(erro);
				}
			);	
		}

		function init() {
			vm.buscaContatos();
		}

		function remove(contato) {
			Contato.delete({id: contato._id}, 
				vm.buscaContatos,
				function (erro) {
					vm.mensagem.texto = 'Não foi possível remover o contato';
					console.log(erro);
				}
			);
		}
	}
})();