(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  $scope.localizacion = {};
  $scope.ocultar=true;
  
//peticion httpRequest mediante ajax, es ASINCRONA!!!


$scope.localizar = function(){
    $http.jsonp('http://geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK')
    .success(function(data){
        console.trace('response OK %o', data);
        $scope.localizacion = data;
        $scope.ocultar=false;
        $scope.initMap();
    });
  };

  $scope.initMap = function() {
    var myLatLng = {
                     lat: +$scope.localizacion.geoplugin_latitude, 
                     lng: +$scope.localizacion.geoplugin_longitude
                    };

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: $scope.localizacion.geoplugin_regionName
    });
  }


   



}]);





})();
