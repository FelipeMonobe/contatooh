// public/js/services/contatoService.js

(function() {
	"use strict";

	angular
	.module('contatooh')
	.factory('Contato', ContatoService);

	function ContatoService ($resource) {
		return $resource('/contatos/:id');
	}
})();