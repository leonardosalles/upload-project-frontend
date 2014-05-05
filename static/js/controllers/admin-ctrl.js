define(['controllers/controllers', 'text!../../../static/views/admin.html'],	function (controllers, template) {
	'use strict';
	
	controllers.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/admin', {template: template, controller: 'AdminCtrl', title: 'Admin', rolesAllowed: 'admin'});
	}]);
	
	
	controllers.controller('AdminCtrl', function ($scope, $window) {
		$window.document.title = 'Admin';
		
		$scope.listaTeste = ['ABC', 'DEF', 'GHI'];
	});
});