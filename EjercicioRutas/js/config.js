// var app = angular.module( "app", [ ] );
app.config( function( $routeProvider ){

  $routeProvider
    .when('/',{
        templateUrl: 'parciales/home.html'
    })
    .when('/componente1',{
        templateUrl: 'parciales/componente.html'
    })
    .when('/alumnos',{
      templateUrl: 'parciales/alumnos.html'
  })
    .when('/profesores',{
        templateUrl: 'parciales/profesores.html'
    })
    .when('/creditos',{
      templateUrl: 'parciales/creditos.html'
    })
    .otherwise({
      redirectTo: '/'
    })

})
