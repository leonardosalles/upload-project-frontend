define(['controllers/controllers', 'text!../../../static/views/envie-sua-foto.html'], function (controllers, template) {
	'use strict';
	
	controllers.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/envie-sua-foto', {template: template, controller: 'EnvieSuaFotoCtrl', title: 'Envie sua foto'});
	}]);
	
	
	controllers.controller('EnvieSuaFotoCtrl', function ($scope, $window, $notify) {
		$window.document.title = 'Envie sua foto';
		
		$scope.upload = function () {
			if (!$scope.foto1Selected || !$scope.foto2Selected) {
				$notify.info('Selecione as duas imagens antes');
			} else {
				if ($scope.formUpload.isInvalid()) { return; }
			}
		}
		
		var elementHandler = function (element, e, fotoSelected) {
			if(typeof FileReader == "undefined") return true;
			
			if (fotoSelected === 1) {
				$scope.foto1Selected = true;
			} else {
				$scope.foto2Selected = true;
			}

			var elem = $(element);
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
		}
		
		
		$('#foto1').change(function(e) {
			elementHandler(this, e, 1);
		});
		
		$('#foto2').change(function(e) {
			elementHandler(this, e, 2);
		});
	});
});