angular.module('angularApp'). //nombreApp
   component('componenteMenu', {//nombre componente, para usarlo <componente-menu>
    templateUrl: './components/menu/menu.html',
    controller: function MenuController($scope) {
      console.trace('MenuController');
          
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

     
  
           //funcion
      $scope.cambiarActivo = function(ruta){
        $scope.rutas.forEach(element => {
          element.active=false;
        });
        ruta.active=true;
  
      }
  
 
    }//Fin MenuController
  });