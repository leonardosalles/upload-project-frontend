define(['controllers/controllers', 'text!../../../static/views/contato.html'],	function (controllers, template) {
	'use strict';
	
	controllers.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/contato', {template: template, controller: 'ContatoCtrl', title: 'Contato'});
	}]);
	
	
	controllers.controller('ContatoCtrl', function ($scope, $window) {
		$window.document.title = 'Contato';
		
		$scope.enviaMensagem = function () {
			if ($scope.formMensagem.isInvalid()) { return; }
			
			
		}
	});
});