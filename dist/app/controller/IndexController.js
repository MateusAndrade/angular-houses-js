app.controller("IndexController", function($scope, HouseFactory){

  HouseFactory.consultarCasas()
      .then(function(res){
          $scope.houses = res.data;
      })
      .catch(function(res){
          $scope.msg = "Não foi possível consultar os Imóveis";
      })
      
});
