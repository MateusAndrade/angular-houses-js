app.controller("DetalhesController", function($scope){
  //carrego as informacoes da casa salvas no storage
  $scope.casa = angular.fromJson(sessionStorage.getItem("detalhesCasa"));

  //Forço o bloco de imagem da casa a ter o tamanho total da tela,
  //ficaria melhor aplicado em um filter 
  $("#img-casa").css("width",$(".header-breadcrumb").width()+"px");

});
