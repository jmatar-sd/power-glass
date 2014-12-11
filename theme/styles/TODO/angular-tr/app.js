var myApp	= angular.module('myApp', [
	'ngRoute',
	'frutsControllers'
	]);
myApp.config(['$routeProvider', function ($routeProvider){
	$routeProvider.
	when('/list', {templateUrl: 'partials/list.html', controller: 'FrutsList'}).
	otherwise({redirectTo: '/list'})
}]);