var app = angular.module('MyApp');
app.controller('home', function($scope) {
    $scope.names = "HomePage";
    $scope.todoList = [];
     $scope.todoAdd = function() {
		$scope.todoList.push({todoText:$scope.todoInput});
		$scope.todoInput = "";
    };
});


app.controller('about', function($scope, $http, $timeout) {
	$scope.fullPageLoader = 1;
    $scope.names = "About";

    $http.get("https://randomuser.me/api/?results=15")
    .then(function(response) {
        /*$scope.myWelcome = response.data;*/
        /*console.log(response.data.results);*/
        $scope.myWelcome = response.data.results;
        $timeout(function(){
			$scope.fullPageLoader = 0;
		}, 500);
    });
});


app.controller('product', function($scope) {
    $scope.names = "Product";

    $scope.productlist = [
    {
		brand_id: '1',
		brand_name: 'Brand1',
		brand_category: 'category1',
		brand_website: 'www.google.com',
		brand_content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat tenetur aperiam optio laborum magnam repellat blanditiis quo voluptatum, deleniti animi recusandae, dicta voluptatem quod culpa temporibus! Repellat, voluptatem, repudiandae. Veritatis natus temporibus, odit esse eos molestiae consequatur, est tenetur voluptate officiis laborum id tempora aut dignissimos? Unde, sit? Minima, provident!',
		meta_title: 'Meta Title',
		meta_keywords: 'Meta Keywords',
		meta_description: 'Meta Description'
	},
	{
		brand_id: '2',
		brand_name: 'Brand2',
		brand_category: 'category2',
		brand_website: 'www.google.com',
		brand_content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat tenetur aperiam optio laborum magnam repellat blanditiis quo voluptatum, deleniti animi recusandae, dicta voluptatem quod culpa temporibus! Repellat, voluptatem, repudiandae. Veritatis natus temporibus, odit esse eos molestiae consequatur, est tenetur voluptate officiis laborum id tempora aut dignissimos? Unde, sit? Minima, provident!',
		meta_title: 'Meta Title',
		meta_keywords: 'Meta Keywords',
		meta_description: 'Meta Description'
	},
	{
		brand_id: '3',
		brand_name: 'Brand3',
		brand_category: 'category3',
		brand_content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat tenetur aperiam optio laborum magnam repellat blanditiis quo voluptatum, deleniti animi recusandae, dicta voluptatem quod culpa temporibus! Repellat, voluptatem, repudiandae. Veritatis natus temporibus, odit esse eos molestiae consequatur, est tenetur voluptate officiis laborum id tempora aut dignissimos? Unde, sit? Minima, provident!',
		meta_title: 'Meta Title',
		meta_keywords: 'Meta Keywords',
		meta_description: 'Meta Description'
	},
	{
		brand_id: '4',
		brand_name: 'Brand4',
		brand_category: 'category4',
		brand_website: 'www.google.com',
		brand_content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat tenetur aperiam optio laborum magnam repellat blanditiis quo voluptatum, deleniti animi recusandae, dicta voluptatem quod culpa temporibus! Repellat, voluptatem, repudiandae. Veritatis natus temporibus, odit esse eos molestiae consequatur, est tenetur voluptate officiis laborum id tempora aut dignissimos? Unde, sit? Minima, provident!',
		meta_title: 'Meta Title',
		meta_keywords: 'Meta Keywords',
		meta_description: 'Meta Description'
	},
	{
		brand_id: '5',
		brand_name: 'Brand5',
		brand_category: 'category5',
		brand_website: 'www.google.com',
		brand_content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat tenetur aperiam optio laborum magnam repellat blanditiis quo voluptatum, deleniti animi recusandae, dicta voluptatem quod culpa temporibus! Repellat, voluptatem, repudiandae. Veritatis natus temporibus, odit esse eos molestiae consequatur, est tenetur voluptate officiis laborum id tempora aut dignissimos? Unde, sit? Minima, provident!',
		meta_title: 'Meta Title',
		meta_keywords: 'Meta Keywords',
		meta_description: 'Meta Description'
	},
	{
		brand_id: '6',
		brand_name: 'Brand6',
		brand_category: 'category6',
		brand_website: 'www.google.com',
		brand_content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat tenetur aperiam optio laborum magnam repellat blanditiis quo voluptatum, deleniti animi recusandae, dicta voluptatem quod culpa temporibus! Repellat, voluptatem, repudiandae. Veritatis natus temporibus, odit esse eos molestiae consequatur, est tenetur voluptate officiis laborum id tempora aut dignissimos? Unde, sit? Minima, provident!',
		meta_title: 'Meta Title',
		meta_keywords: 'Meta Keywords',
		meta_description: 'Meta Description'
	},
	{
		brand_id: '7',
		brand_name: 'Brand7',
		brand_category: 'category7',
		brand_content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat tenetur aperiam optio laborum magnam repellat blanditiis quo voluptatum, deleniti animi recusandae, dicta voluptatem quod culpa temporibus! Repellat, voluptatem, repudiandae. Veritatis natus temporibus, odit esse eos molestiae consequatur, est tenetur voluptate officiis laborum id tempora aut dignissimos? Unde, sit? Minima, provident!',
		meta_title: 'Meta Title',
		meta_keywords: 'Meta Keywords',
		meta_description: 'Meta Description'
	},
	{
		brand_id: '8',
		brand_name: 'Brand8',
		brand_category: 'category8',
		brand_website: 'www.google.com',
		brand_content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat tenetur aperiam optio laborum magnam repellat blanditiis quo voluptatum, deleniti animi recusandae, dicta voluptatem quod culpa temporibus! Repellat, voluptatem, repudiandae. Veritatis natus temporibus, odit esse eos molestiae consequatur, est tenetur voluptate officiis laborum id tempora aut dignissimos? Unde, sit? Minima, provident!',
		meta_title: 'Meta Title',
		meta_keywords: 'Meta Keywords',
		meta_description: 'Meta Description'
	},
	{
		brand_id: '9',
		brand_name: 'Brand9',
		brand_category: 'category9',
		brand_content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat tenetur aperiam optio laborum magnam repellat blanditiis quo voluptatum, deleniti animi recusandae, dicta voluptatem quod culpa temporibus! Repellat, voluptatem, repudiandae. Veritatis natus temporibus, odit esse eos molestiae consequatur, est tenetur voluptate officiis laborum id tempora aut dignissimos? Unde, sit? Minima, provident!',
		meta_title: 'Meta Title',
		meta_keywords: 'Meta Keywords',
		meta_description: 'Meta Description'
	}
    ];
});


app.controller('contact', function($scope, $http) {
    $scope.names = "Contact";
	$scope.dataForm = {};
	$scope.submit = function() {
		console.log($scope.dataForm);
		$scope.showErrorClass = 'alert-success';

	};
});


app.controller('map', function($scope) {
    $scope.names = "Map";

    $scope.showBig = 0;

    $scope.inc = 1;

	$scope.functionss = function() {
    	$scope.showBig = 1;
		$scope.showClass = 'alert-success';
		$scope.inc = $scope.inc+1;
	};


	$scope.reset = function() {
    	$scope.showBig = 0;
		$scope.showClass = '';
    	$scope.inc = 1;
	};

});


app.controller('game', function($scope) {
    $scope.names = "Game";
	$scope.scoreCount = 0;

    $scope.todos = [
	    {text:'Static1', done:false},         
	    {text: 'atatic2', done:false}
	  ];
	  /*$scope.todos = [];*/
	  
	  $scope.getTotalPlayers = function () {
	    return $scope.todos.length;
	  };
	  
	  
	  $scope.addPlayers = function () {
	    $scope.todos.push({text:$scope.formTodoText});
	    $scope.formTodoText = '';
	  };
});