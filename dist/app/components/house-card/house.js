app.component("houseComponent",{
  templateUrl: 'app/components/house-card/house.html',
  bindings: {
    data: '='
  },
  controller: function(){
    this.detalhes = function(){
      console.log(this.data);
    };
  }
});
