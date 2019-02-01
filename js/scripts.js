function Pizza () {
  this.size = 0;
  this.toppings = [];
  this.cost = 0;
}

Pizza.prototype.costCalc = function () {
  this.cost = "$"+ (10 + (this.size * 3) + (this.toppings.length * 2));
}

var newPizza = new Pizza;
$(document).ready(function () {

  $("#size-button").click(function () {
    newPizza.size = 0;
    newPizza.toppings = [];
    newPizza.cost = 0;
    newPizza.size = $("#size").val();
    $("input:checkbox[name=topping-check]:checked").each(function(){
      var newPizzaTopping = $(this).val();
      newPizza.toppings.push(newPizzaTopping);
    });
    newPizza.costCalc();
    $(".result").text("Your "+$("#size option:selected").text().toLowerCase()+" pizza")
    if (newPizza.toppings.length > 1) {
      $(".result").append(" with "+newPizza.toppings.slice(0, (newPizza.toppings.length - 1)).join(", ").toLowerCase()+" and "+newPizza.toppings.slice(newPizza.toppings.length - 1).join().toLowerCase()+" will be "+newPizza.cost)
    }
    else if (newPizza.toppings.length === 1) {
      $(".result").append(" with "+newPizza.toppings[0].toLowerCase()+" will be "+newPizza.cost)
    }
    else if (newPizza.toppings.length === 0) {
      $(".result").append(" will be "+newPizza.cost)
    }
  })
});
