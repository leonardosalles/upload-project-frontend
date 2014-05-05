define(['directives/directives', 'text!../../views/core/bootstrap.html'], function (directives, template) {
	'use strict';
	
	directives.directive('jetBootstrap', function ($bootstrap) {
		return {
			restrict: 'A',
			replace: true,
			scope: true,
			template: template,

			link: function (scope, element) {
				scope.$bootstrap = $bootstrap;

				scope.$on('jetReady', function () {
					element.remove();
					$('body').addClass('ready');
				});
			}
		};
	});
	
	
});