describe('meuBotaoAviso', function () {
	var $scope;
	var element;

	beforeEach(function () {
		module('meusComponentes');
		inject(function ($rootScope, $compile) {
			$scope = $rootScope.$new();
			element = angular.element('<meu-botao-aviso nome="Remover" acao="vm.remove()">');
			
			$compile(element)($scope);
			$scope.$digest();
		});
	});

	it('deve criar um botao de aviso com o texto Remover e acao remove', function () {
		expect(element.text()).toContain('Remover');
		expect(element.attr('acao')).toBe('vm.remove()');
	});
});

describe('meuFoco', function () {
	var $scope;
	var element;
	var evento = 'contatoSalvo';

	beforeEach(function () {
		module('meusComponentes');
		inject(function ($rootScope, $compile) {
			$scope = $rootScope.$new();
			element = angular.element('<button meu-foco evento="' + evento + '">Voltar</button>');

			$compile(element)($scope);
			$scope.$digest();
		});
	});

	it('deve focar o botão', function () {
		angular.element(document.body).append(element);
		$scope.$broadcast(evento);
		expect(angular.element(document.activeElement).text()).toBe('Voltar');
	});
});

describe('meuPainel', function () {
	var $scope;
	var element;

	beforeEach(function () {
		module('meusComponentes');
		module('templates');
		inject(function ($rootScope, $compile) {
			$scope = $rootScope.$new();
			element = angular.element('<meu-painel titulo="Principal"><p>Oi</p></meu-painel>');

			$compile(element)($scope);
			$scope.$digest();
		});
	});
});