function Pizza () {
  this.size = 0
  this.toppings = []
  this.cost = 0
}

Pizza.prototype.costCalc = function () {
  this.cost = 10 + (this.size * 3) + this.toppings.length;
}

var newPizza = new Pizza;
$(document).ready(function () {

  $("#size-button").click(function () {
    newPizza.size = $("#size").val();

    $("input:checkbox[name=topping-check]:checked").each(function(){
      // debugger;
      var newPizzaTopping = $(this).val();
      newPizza.toppings.push(newPizzaTopping);
  });





});
});
