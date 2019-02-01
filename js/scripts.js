function Pizza () {
  this.size = 0
  this.toppings = []
  this.cost = 0
}

Pizza.prototype.costCalc = function () {
  this.cost = "$"+ (10 + (this.size * 3) + this.toppings.length);
}

var newPizza = new Pizza;
$(document).ready(function () {

  $("#size-button").click(function () {
    newPizza.size = $("#size").val();

    $("input:checkbox[name=topping-check]:checked").each(function(){
      var newPizzaTopping = $(this).val();
      newPizza.toppings.push(newPizzaTopping);
  });
    newPizza.costCalc();
    $(".result").text("Your "+$("#size option:selected").text().toLowerCase()+" pizza")
    // debugger;
    if (newPizza.toppings.length > 0) {
      $(".result").append(" "+newPizza.toppings.join(", "))
    }
    })
  });
