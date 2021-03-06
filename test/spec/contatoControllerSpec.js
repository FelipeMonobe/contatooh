// contatooh/test/spec/ContatoControllerSpec.js

describe("ContatoController", function() {
    var $scope,
        $httpBackend;

    beforeEach(function() {
        module('contatooh');
        inject(function($injector, _$httpBackend_) {
            $scope = $injector.get('$rootScope').$new();
            $httpBackend = _$httpBackend_;

            $httpBackend.when('GET', '/contatos/1')
            .respond({_id: '1'});
            $httpBackend.when('GET', '/contatos')
            .respond([{}]);
        });
    });

    it("Deve criar um Contato vazio quando nenhum parâmetro de rota for passado",
        inject(function ($controller) {
            $controller('ContatoController as vm', {'$scope': $scope});        
            var vm  = $scope.vm;

            expect(vm.contato._id).toBeUndefined();
        })
    );

    it('Deve preencher o Contato quando parâmetro de rota for passado',
        inject(function ($controller) {
            $controller('ContatoController as vm', { '$routeParams': {contatoId: 1}, '$scope': $scope });
            var vm = $scope.vm;

            $httpBackend.flush();
            expect(vm.contato._id).toBeDefined();
        })
    );   
});