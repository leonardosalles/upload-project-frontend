define(['controllers/controllers', 'text!../../../static/views/login.html'],	function (controllers, template) {
	'use strict';
	
	controllers.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/login', {template: template, controller: 'LoginCtrl', title: 'Login'});
	}]);
	
	
	controllers.controller('LoginCtrl', function ($scope, $window, Twitter, $notify) {
        $window.document.title = 'Login';
        $scope.usario = new Object();
        
        $scope.login = function () {
            if ($scope.formLogin.isInvalid()) { return; }
            
            $notify.success('Email: ' + $scope.usario.email + '<br /> Senha: ' + $scope.usario.senha);
        }
	});
});
