/* Pizza Oven Function */

function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {}

    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;

    return pizza;
}

/* 2 Test Pizzas! */

var briansPizza = pizzaOven("wheat", "tomato", "mozzarella", ["pepperoni", "mushroom", "basil"])
console.log(briansPizza)

var momsPizza = pizzaOven("cauliflower", "alfredo", "asiago", ["portobello mushroom", "onions", "basil", "garlic"])
console.log(momsPizza)
/* Deep Dish pizza */

var deepDishPizza = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"])
console.log(deepDishPizza)

/* Hand-tossed pizza */

var handTossedPizza = pizzaOven("hand-tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(handTossedPizza)


