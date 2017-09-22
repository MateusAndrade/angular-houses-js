app.config(['$routeProvider','$locationProvider', function( $routeProvider, $locationProvider ){
        $locationProvider.hashPrefix('!');

        $routeProvider
        .when('/detalhes',{
            templateUrl : 'app/components/house-details/house-details.html',
            controller : 'DetalhesController'
        })
        .otherwise({
            templateUrl : 'app/views/pagina-principal.html',
            redirectTo : '/',
            controller : 'IndexController'
        });

}]);
