app.component("houseComponent",{
  templateUrl: 'app/components/house-card/house.html',
  bindings: {
    data: '='
  },
  controller: function(){
    //consulto os detalhes da casa selecionada
    this.detalhes = function(){
      console.log(this.data);
      sessionStorage.setItem("detalhesCasa",angular.toJson(this.data));
      location.assign("#!detalhes");
    };
  }
});
