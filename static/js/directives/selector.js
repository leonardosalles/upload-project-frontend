define(['directives/directives', 'text!../../views/skeleton/selector.html'], function (directives, template) {
    
	'use strict';
	directives.directive('uploadSelector', function ($rootScope, $location, $notify) {

		return {
			
			restrict: 'A',
			replace: true,
			template: template,
			scope: {},
			
			link: function (scope, element, attrs) {
				$(element).change(function(e) {
					if(typeof FileReader == "undefined") return true;

					var elem = $(this);
					var files = e.target.files;

					for (var i=0, file; file=files[i]; i++) {
						if (file.type.match('image.*')) {
							var reader = new FileReader();
							reader.onload = (function(theFile) {
								return function(e) {
									var image = e.target.result,
									    previewDiv = $('.file-preview', elem.parent());
									
									previewDiv.css({
										"background-position":"50%, 50%",
										"background-image":"url("+image+")",
										"background-size": "228px",
										"margin": "0 auto"
									});
									
									previewDiv.find('span').remove();
								};
							})(file);
							reader.readAsDataURL(file);
						} else {
							$notify.error('Apenas imagens!');
						}
					}
				});
			}
		};
	});
});
