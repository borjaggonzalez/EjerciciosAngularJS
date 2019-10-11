app.controller( 'contratosController', function($scope,$http){
    
    $scope.contratos = [];
    $scope.ENDPOINT = "http://localhost:3000/contratos";
  
  
         this.$onInit = function(){
              console.trace('contratosController onInit');
              $http.get($scope.ENDPOINT).then(function(response){
                      console.trace('peticion GET %s response=%o',$scope.ENDPOINT,response);
                    $scope.contratos = response.data;
                $scope.tipoproductkt =  response.data.filter(e=>e.TIPPRODUCT==='KT'); 
                $scope.coddigsalario =  response.data.map(e=>
                                                             ((e.codContrat)?e.codContract:0)+
                                                             ((e.digContrat)?e.digContrat:0)+
                                                             (((e.SALCONTRAT)?(e.SALCONTRAT/100):0))
                                                            );

              });
            
        };//onInit

    });