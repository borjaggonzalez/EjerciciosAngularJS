angular.module('angularApp'). //nombreApp
   component('componenteMenu', {//nombre componente, para usarlo <componente-menu>
    templateUrl: './components/menu/menu.html',
    controller: function MenuController($scope) {
      console.trace('MenuController');
          
      $scope.rutas=[
        { 
          "nombre":"Inicio",
          "url":"#!/",
          "active":true, 
          "icono":"fas fa-home"
       },
       { 
          "nombre":"Frutas",
          "url":"#!/frutas",
          "active":false,
          "icono": "fas fa-apple-alt"
        },
        { 
          "nombre":"Alumnos",
          "url":"#!/alumnos",
          "active":false,
          "icono":"fas fa-user-graduate"
        },
        { 
          "nombre":"Creditos",
         "url":"#!/creditos",
          "active":false,
          "icono":"fas fa-ticket-alt"
        },
        { 
          "nombre":"Componentes",
         "url":"#!/componente1",
          "active":false,
          "icono":"fas fa-cogs"
        }, 
        { 
          "nombre":"Filter,Map,Reduce",
         "url":"#!/programacionfuncional",
          "active":false,
          "icono":"fas fa-terminal"
        },
       
       
      ];

     
  
           //funcion
      $scope.cambiarActivo = function(ruta){
        $scope.rutas.forEach(element => {
          element.active=false;
        });
        ruta.active=true;
  
      }
  
 
    }//Fin MenuController
  });