define(['directives/directives'], function (directives) {
	'use strict';
	
	directives.directive('jetLoading', function ($http, $filter) {
        
		return {
			restrict: 'A',
			replace: true,
			template: '<div class="body-loader">' +
						'<div class="body-loader-inner">' +
							'<p><span class="glyphicon glyphicon-cog glyphicon-spin"></span></p>' +
							'<p><span class="loading-text">{{"spa.loading" | i18n}}</span></p>' +
						'</div>' +
					  '</div>',

			controller: function ($scope, $element) {
				
				$scope.$watchCollection(function () {
					return $http.pendingRequests;
				}, function () {
				
					var array = $filter('filter')($http.pendingRequests, function (request) {
						return (request.headers['jet-loading'] === undefined || request.headers['jet-loading']);
					});
					
					if (array.length > 0) {
						$element.addClass('active');
					} else {
						$element.removeClass('active');
					}
				}, true);
			}
		};
	});
});
