function PokemonProvider($http,$q){
    
    console.log('PokemonProvider');
    const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000";


    

    this.listar = function(){  
        var q = $q.defer();  
        console.log('pokemonProvider listar ' + ENDPOINT);
        this.p1 = $http.get(ENDPOINT).then (function(result){
            console.debug('promesa1 cumplida resultado %o ', result);
            this.pokemons=[];
            angular.forEach(result.data.results, function(value,key){
                console.log('FOR EACH  ' + key  + ': ' + value.url); 
                  this.p2 =  $http.get(value.url).then (function(resultado){
                    
                     this.pokemons.push(resultado);
                        q.resolve(this.pokemons);
                  }).catch(function(resultado){
                    console.debug('p2 no cumplida resultado %o ', + resultado);
                  });

            });//forEach

        }).catch(function (result) {
            console.debug("fallo alguna promesa %o", + resutado);
        });    


        return q.promise;
      }// listar

    this.listaById= function(url){
        console.log('pokemonProvider listaById ' + url);
        return $http.get(url);
    }


     //vamosa esperar a que se cumplan las dos
   $q.all( [this.p1 , this.p2] ).then( function(){
    console.debug("Todas las promesas completadas");
    console.debug(pokemons);

}).catch(function (result) {
       console.debug("fallo alguna promesa");
});    
   



}
