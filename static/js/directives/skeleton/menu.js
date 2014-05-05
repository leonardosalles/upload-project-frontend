define(['directives/directives', 'text!../../../views/skeleton/menu.html'], function (directives, template) {
    
	'use strict';
	directives.directive('uploadMenu', function ($rootScope, $location) {

		return {
			
			restrict: 'A',
			replace: true,
			template: template,
			scope: {},

			link: function (scope, element, attrs) {
				scope.menu = $rootScope.menu;

				var routeChangeSuccess = function () {
					var li = element.find('ul').find('a[href="#' + $location.path() + '"]').parent();
					if (li) {
						li.addClass('active');
					}

				};

				
				$rootScope.$watch('menu', function (newMenu) {
					scope.menu = newMenu;
				});

				scope.$on('$routeChangeStart', function () {
					element.find('ul').find('li.active').removeClass('active');
				});

				scope.$on('$routeChangeSuccess', routeChangeSuccess);
			},
			
			controller: function ($scope) {
				$("#menu-toggle").click(function(e) {
                    e.preventDefault();
                    $("#wrapper").toggleClass("active");
                    $("#sidebar-wrapper").toggleClass("active");
                });
			}
		};
	});
});
