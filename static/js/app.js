define([
	'translates/locale_pt-br',
	'translates/locale_en',
    'text!../views/core/error.html',

	'core',
		
	'controllers/controllers',
	'controllers/home-ctrl',
	'controllers/envie-sua-foto-ctrl',
	'controllers/contato-ctrl',
    'controllers/admin-ctrl',
    'controllers/login-ctrl',
    
], function (localePtBR, localeEn, template) {

	'use strict';
	
	var app = angular.module('app', ['$strap.directives', 'app.services', 'app.controllers', 'app.directives', 'app.filters']);
	
	
	app.config(function ($translateProvider, $routeProvider) {
		$translateProvider.translations('pt-BR', localePtBR);
		$translateProvider.translations('en', localeEn);
        
        
        $routeProvider.when('/error', {error: true, template: template, controller: function ($window, $scope, $error) {
			$window.document.title = I18n.t('spa.exception.title');
			$scope.error = $error.get() || '';
		}});
		
		$routeProvider.when('/error403', {error: true, template: template, controller: function ($window, $scope) {
			$window.document.title = I18n.t('spa.exception.code.403');
			$scope.error = {message: I18n.t('spa.exception.code.403')};
		}});
		
		$routeProvider.otherwise({error: true, template: template, controller: function ($window, $scope) {
			$window.document.title = I18n.t('spa.exception.pageNotFound');
			$scope.error = {message: I18n.t('spa.exception.pageNotFound')};
		}});
	});

	app.run(function ($rootScope, $bootstrap, $timeout, $window, $security, $translate) {
		$security.addRole('admin');
		
        $rootScope.menu = [
			{description: I18n.t('menu.inicio'), href: '#/'},
			{description: I18n.t('menu.envieSuaFoto'), href: '#/envie-sua-foto'},
		];

        if (!$rootScope.hasRole('admin')) {
            $rootScope.menu.push({description: I18n.t('menu.login'), href: '#/login'});
        }

        if ($rootScope.hasRole('admin')) {
            $rootScope.menu.push({description: I18n.t('menu.admin'), href: '#/admin'});
        }
            
            
        $rootScope.menu.push({description: I18n.t('menu.contato'), href: '#/contato'});

		$timeout(function () {
			$bootstrap.setProgress(20);
		}, 1000);
		
		$timeout(function () {
			$bootstrap.setProgress(40);
		}, 2000);
		
		$timeout(function () {
			$bootstrap.setProgress(60);
		}, 3000);
		
		$timeout(function () {
			$bootstrap.setProgress(80);
		}, 4000);
		
		$timeout(function () {
			$bootstrap.setProgress(100);
		}, 5000);
		
		$timeout(function () {
			$bootstrap.ready();
		}, 5500);
            
        $rootScope.$on('$routeChangeSuccess', function(event, nextRoute) {
            if (nextRoute && nextRoute.$$route && nextRoute.$$route.title) {
                $rootScope.page_title = nextRoute.$$route.title;
            }
        });
	});

	return app;
});
