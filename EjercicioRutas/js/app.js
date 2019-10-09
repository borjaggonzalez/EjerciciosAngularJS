var app = angular.module('angularApp',['ngRoute']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

  $scope.menuSuperior = "parciales/menu.html";

  $scope.rutas=[
      { 
        "nombre":"Inicio",
         "url":"#!/",
         "active":true

     },
     { 
        "nombre":"Profesores",
       "url":"#!/profesores",
        "active":false
      },
      { 
        "nombre":"Alumnos",
       "url":"#!/alumnos",
        "active":false
      },
      { 
        "nombre":"Creditos",
       "url":"#!/creditos",
        "active":false
      },
      { 
        "nombre":"Componente",
       "url":"#!/componente1",
        "active":false
      }
    ]

    $scope.cambiarActivo = function(ruta){
      $scope.rutas.forEach(element => {
        element.active=false;
      });
      ruta.active=true;

    }


}]);
