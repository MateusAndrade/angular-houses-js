app.controller("IndexController", function($scope, HouseFactory){

  $scope.casasIniciais = [];
  $scope.casas = [];
  var casasTemporarias = [];

  (function inicializaTela(){
    //carrego os dados vindos do arquivo houses.json usando a minha factory
    HouseFactory.consultarCasas()
    .then(function(res){
      $scope.casas = res.data;
      console.log($scope.casas);
      $scope.casasIniciais = angular.copy($scope.casas);
    })
    .catch(function(res){
      //caso não sejam encontrados registros no mesmo, ou não seja
      //possível carregar ele é exibida uma mensagem de erro
      $scope.msg = "Não foi possível atender a sua requisição, por favor tente novamente.";
    })
  })();

  $scope.tipoAquisicao = function(){
      // filtro as pesquisas realizadas por compra
      if($scope.pesquisa.compra){
        // filtro os imoveis que estao setadas como disponiveis para compra
        // usando o filter para retornar um array
        casasTemporarias = $scope.casas.filter(function(elem, index, array){
          if(elem.tipo.venda.disponibilidade)
            return array.indexOf( elem ) === index;
        });
        $scope.casas = casasTemporarias;
      } else if(!$scope.pesquisa.compra && !$scope.pesquisa.aluguel) {
        $scope.casas = $scope.casasIniciais;
      }

      // filtro as pesquisadas realizadas por aluguel
      if($scope.pesquisa.aluguel){
        // filtro os imoveis que estao setadas como disponiveis para compra
        // usando o filter para retornar um array
        casasTemporarias = $scope.casas.filter(function(elem, index, array){
          if(elem.tipo.locacao.disponibilidade)
            return array.indexOf( elem ) === index;
        });
        $scope.casas = casasTemporarias;
      } else if(!$scope.pesquisa.compra && !$scope.pesquisa.aluguel) {
        $scope.casas = $scope.casasIniciais;
      }
  }

  $scope.filtrarDormitoriosVagas = function(ele){
    casasTemporarias = $scope.casas.filter(function(elem, index, array){
      if(elem.vagas == ele || elem.dormitorios == ele)
        return array.indexOf( elem ) === index;
    });
    $scope.casas = casasTemporarias
  }

  $scope.limparFiltro = function(){
    $scope.casas = angular.copy(casasTemporarias);
  }

});
