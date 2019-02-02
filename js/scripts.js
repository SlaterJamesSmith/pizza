function Pizza () {
  this.size = 0;
  this.toppings = [];
  this.cost = 0;
}

Pizza.prototype.costCalc = function () {
  this.cost = "$"+ (10 + (this.size * 3) + (this.toppings.length * 2));
}

Pizza.prototype.new = function () {
  this.size = $("#size").val();
  this.toppings = [];
  this.cost = 0;
}

Pizza.prototype.print = function () {
  $(".result").text("Your "+$("#size option:selected").text().toLowerCase()+" pizza")
  if (this.toppings.length > 1) {
    $(".result").append(" with "+this.toppings.slice(0, (this.toppings.length - 1)).join(", ").toLowerCase()+" and "+this.toppings.slice(this.toppings.length - 1).join().toLowerCase()+" will be "+this.cost+".")
  }
  else if (this.toppings.length === 1) {
    $(".result").append(" with "+this.toppings[0].toLowerCase()+" will be "+this.cost+".")
  }
  else if (this.toppings.length === 0) {
    $(".result").append(" will be "+this.cost+".")
  }
}

var newPizza = new Pizza;
$(document).ready(function () {
  $("#size-button").click(function () {
    newPizza.new();
    $("input:checkbox[name=topping-check]:checked").each(function(){
      var newPizzaTopping = $(this).val();
      newPizza.toppings.push(newPizzaTopping);
    });
    newPizza.costCalc();
    newPizza.print();
  });
})
