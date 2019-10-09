/* javascript para nuestra App */

var app = angular.module(
                            'profesorApp', // nombre de la App
                            []             // para inyectar librerias
                         );


 /* Controladores */    
 
 app.controller(
     'profesorController',      // nombre controlador
     function( $scope, $timeout){                // la programacion del controlador


            // propiedades del modelo
            $scope.esVisible=false;
            $scope.animacion = "animated bounceInLeft";
            $scope.editando = {};            
            $scope.profesor = {
                nombre: "Juan Carlos Pineda",
	            bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
	            edad: 47,
	            foto: "img/juancarlos.jpg"
            };


            // funciones
            $scope.editar = function(){
                console.trace('click boton editar');
                angular.copy( $scope.profesor, $scope.editando);
                $scope.animacion = "animated bounceInLeft";
                $scope.esVisible=true;
            }

            $scope.cancelar = function(){
                console.trace('click boton cancelar');
                $scope.animacion = "animated bounceOutRight";
                $timeout(function(){
                    $scope.esVisible=false;
                },500);
                $scope.editando = {};
            }

            $scope.guardar = function(){
                console.trace('click boton guardar');
                angular.copy( $scope.editando, $scope.profesor);
                $scope.animacion = "animated bounceOutRight";
                $timeout(function(){
                    $scope.esVisible=false;
                },500);
            }


 });
 // end profesorController


 app.controller( 'videoController', function($scope,$timeout){  

        // propiedades del modelo
           $scope.animacion = "";
           $scope.video = {
               id: 3,
               nombre: "Red Hot Chili Peppers - Californication [Official Music Video]",
               codigo: "YlUKcNNmywk",
               categoria: {
                    id: 3,
                    nombre: "Musica"
               },
               usuario: {
                    id: 1,
                   nombre: "Administrador"
                  
               },
               likes: 5
           };

           $scope.sumarLikes = function(){
                $scope.video.likes++;
                $scope.animacion = "animated pulse";
                $timeout(function(){
                    $scope.animacion="";
                },1000);
           }
});
// end videoController

app.controller( 'frutasController', function($scope){ 
    $scope.frutas=["Manzanas","Pera","Kiwi","Platano"];
    $scope.frutasJson={"frutas":[
        {
            "nombre":"Manzana",
            "color":"roja"
        },
        {
            "nombre":"Pera",
            "color":"verde"
        },
        {
            "nombre":"Kiwi",
            "color":"marron"
        }


    ]};


$scope.seleccionado = function(fruta, event){
    console.log("seleccionado:" + fruta);

}


});
// end frutasController

