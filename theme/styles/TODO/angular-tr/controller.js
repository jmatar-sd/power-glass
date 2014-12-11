var	frutsControllers= angular.module('frutsControllers', []);

frutsControllers.controller('FrutsList', function ($scope, $http){
	$http.get('data.json').success(function (data){
		$scope.fruts= data;	
	});
});