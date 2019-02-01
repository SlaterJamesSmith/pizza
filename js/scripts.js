function Pizza (size, toppings) {
  this.size = size
  this.toppings = toppings
  this.cost = 0
}

Pizza.prototype.costCalc = function () {
  this.cost = 10 + (this.size * 3) + this.toppings.length;
}
