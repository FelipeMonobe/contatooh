// public/js/directives/meus-componentes/meusComponentes.js

angular
.module('meusComponentes', [])
.directive('meuPainel', function () {
	var directive = {};

	directive.restrict = 'EA';
	directive.templateUrl = 'js/directives/meus-componentes/meuPainel.html';
	directive.scope = { titulo: '@' };
	directive.transclude = true;

	return directive;
})

.directive('meuBotaoAviso', function () {
	var directive = {};

	directive.restrict = 'E';
	directive.scope = { nome: '@', acao: '&' };
	directive.template = '<button ng-click="acao()" class="btn btn-warning">{{nome}}</button>';
	
	return directive;
})

.directive('meuFoco', function () {
	var directive = {};

	directive.restrict = 'A';
	directive.scope = { evento: '@' };

	directive.link = function (scope, element) {
		scope.$on(scope.evento, function () {
			element[0].focus();				
		});
	};
	
	return directive;
});