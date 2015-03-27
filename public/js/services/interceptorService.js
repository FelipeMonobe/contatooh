// public/js/services/interceptorService.js

(function () {
	"use strict";

	angular
	.module('contatooh')
	.factory('meuInterceptor', meuInterceptor);

	function meuInterceptor($location, $q) {
		var interceptor = {
			responseError: function (response) {
				if(response.status == 401) {
					$location.path('/auth');
				}
				return $q.reject(response);
			}
		}
		return interceptor;
	}
})();