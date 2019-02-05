function Pizza () {
  this.size = 0;
  this.toppings = [];
  this.cost = 0;
}

Pizza.prototype.costCalc = function () {
  this.cost = "$"+ (10 + (this.size * 3) + (this.toppings.length * 2));
}

Pizza.prototype.new = function (input) {
  this.size = input;
  this.toppings = [];
  this.cost = 0;
}

function displayPizza(pizza) {
  $(".result").text("Your "+$("#size option:selected").text().toLowerCase()+" pizza")
  if (pizza.toppings.length > 1) {
    $(".result").append(" with "+pizza.toppings.slice(0, (pizza.toppings.length - 1)).join(", ").toLowerCase()+" and "+pizza.toppings.slice(pizza.toppings.length - 1).join().toLowerCase()+" will be "+pizza.cost+".")
  }
  else if (pizza.toppings.length === 1) {
    $(".result").append(" with "+pizza.toppings[0].toLowerCase()+" will be "+pizza.cost+".")
  }
  else if (pizza.toppings.length === 0) {
    $(".result").append(" will be "+pizza.cost+".")
  }
}
$(document).ready(function () {
  var newPizza = new Pizza;
  $("#size-button").click(function () {
    newPizza.new($("#size").val());
    $("input:checkbox[name=topping-check]:checked").each(function(){
      var newPizzaTopping = $(this).val();
      newPizza.toppings.push(newPizzaTopping);
    });
    newPizza.costCalc();
    displayPizza(newPizza);
  });
})
