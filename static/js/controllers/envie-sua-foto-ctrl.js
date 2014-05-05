define(['controllers/controllers', 'text!../../../static/views/envie-sua-foto.html'], function (controllers, template) {
	'use strict';
	
	controllers.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/envie-sua-foto', {template: template, controller: 'EnvieSuaFotoCtrl', title: 'Envie sua foto'});
	}]);
	
	
	controllers.controller('EnvieSuaFotoCtrl', function ($scope, $window) {
		$window.document.title = 'Envie sua foto';
	});
});