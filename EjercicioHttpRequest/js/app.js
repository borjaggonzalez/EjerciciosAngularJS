(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http','$timeout', function($scope,$http,$timeout){
  $scope.profesores = {};
  $scope.ocultar = false;
  
//peticion httpRequest mediante ajax, es ASINCRONA!!!
console.debug('llamada asincrona');

$timeout(function(){
    $http.get('json/profesores.json')
    .success(function(data){
        console.trace('response OK %o', data);
        $scope.profesores = data;
        $scope.ocultar = true;
    });
},2000);

console.debug ('seguimos ejecutando otras sentencias');




}]);





})();
