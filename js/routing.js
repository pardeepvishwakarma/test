angular.module('MyApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	/*$locationProvider.html5Mode(true).hashPrefix('!')*/


	$routeProvider
		.when("/HomePage", {
			title:'Homapage',
			templateUrl: 'js/pages/index.html',
			controller: 'home'
		})
		.when("/About", {
			title:'About Us',
			templateUrl: 'js/pages/about.html',
			controller: 'about'
		})
		.when("/Product", {
			title:'Product',
			templateUrl: 'js/pages/product.html',
			controller: 'product'
		})
		.when("/Contact", {
			title:'Contact Us',
			templateUrl: 'js/pages/contact.html',
			controller: 'contact'
		})
		.when("/Map", {
			title:'Map',
			templateUrl: 'js/pages/map.html',
			controller: 'map'
		})
		.when("/Player", {
			title:'Game',
			templateUrl: 'js/pages/player.html',
			controller: 'game'
		})
		
		.otherwise({
			redirectTo: '/HomePage'
		});


		$locationProvider.hashPrefix('');
        
        
}]).run(['$rootScope', '$route', '$location', function ($rootScope, $route, $location) {
	$rootScope.$route = $route;

	$rootScope.$on('$routeChangeSuccess',function(event,current,previous){
		if (current.$$route!==undefined && current.$$route.title!==undefined && current.$$route.title!='')
			document.title = current.$$route.title + ' | Title Prefix';
	});
}]);
