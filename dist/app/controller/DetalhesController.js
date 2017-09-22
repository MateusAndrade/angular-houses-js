app.controller("DetalhesController", function($scope){
  //carrego as informacoes da casa salvas no storage
  $scope.casa = angular.fromJson(sessionStorage.getItem("detalhesCasa"));
  console.log($scope.casa);
});
