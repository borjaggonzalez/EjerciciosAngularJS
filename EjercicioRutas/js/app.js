var app = angular.module('angularApp',['ngRoute', 'ngSanitize']);
/**
 * Servicio para Constantes
 */

app.constant("servicioConstantes",{
  "titulo":"Angular JS",
  "idioma":"es-ES",
  "version":"1.0",
  "autor":"Borja Garcia",
  "github":"https://github.com/borjaggonzalez/ejerciciosangularjs"
});

/**
 * Providers
 */

 
app.service("cancionProvider",CancionProvider);





/**
 * Ejemplo Servicio a traves de una clase
 */

function Rectangulo() {
  this.ancho=0;
  this.alto=0;
 
  this.setAncho=function(ancho) {
    this.ancho=ancho;
  }
   
  this.setAlto=function(alto) {
    this.alto=alto;
  }  
   
  this.getArea=function() {
    return this.ancho * this.alto;
  }
}
app.service("rectanguloService",Rectangulo);

function Cuadrado(tamanyoInicial) {
  this.ancho=tamanyoInicial.ancho;
  this.alto=tamanyoInicial.alto;
   
  this.setAncho=function(ancho) {
    this.ancho=ancho;
  }
   
  this.setAlto=function(alto) {
    this.alto=alto;
  }  
   
  this.getArea=function() {
    return this.ancho * this.alto;
  }
}

 //Definir Servicio


 app.value("tamanyoInicialCuadrado",{
    ancho:2,
    alto:2
  });

  app.service("cuadradoService",['tamanyoInicialCuadrado',Cuadrado]);

