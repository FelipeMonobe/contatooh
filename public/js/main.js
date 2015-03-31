// public/js/main.js

(function() {
	"use strict";

	angular
	.module('contatooh', ['ngRoute', 'ngResource', 'meusComponentes'])
	.config(configuracao);

	function configuracao ($routeProvider, $httpProvider) {
		$httpProvider.interceptors.push('meuInterceptor');

		$routeProvider
		.otherwise({redirectTo: '/contatos'})

		.when('/auth', {
			templateUrl: 'partials/auth.html'
		})		
		.when('/contato', {
			templateUrl: 'partials/contato.html',
			controller: 'ContatoController',
			controllerAs: 'vm'
		})
		.when('/contato/:contatoId', {
			templateUrl: 'partials/contato.html',
			controller: 'ContatoController',
			controllerAs: 'vm'
		})
		.when('/contatos', {
			templateUrl: 'partials/contatos.html',
			controller: 'ContatosController',
			controllerAs: 'vm'
		});
	}
})();