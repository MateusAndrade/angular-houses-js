app.factory("HouseFactory", function($http){

  var _consultarCasas = function(){
    return $http.get("houses.json");
  }

  return{
    consultarCasas: _consultarCasas
  }

});
