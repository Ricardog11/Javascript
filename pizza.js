function pizzaOven( crust, sauce, cheeses, toppings) {
var pizza = {};
pizza.crust = crust;
pizza.sauce = sauce;
pizza.cheeses = cheeses;
pizza.toppings = toppings;
return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["peperoni", "sausage"])
console.log(pizza1)

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2)

var pizza3 = pizzaOven("cheese crust", "marinara", ["mozzarella", ], ["ham", "pineapple", "bacon"]);
console.log(pizza3)

var pizza4 = pizzaOven("square crust", "Garlic marinara", ["mozzarella", "feta"], ["sausage", "pepperoni", ]);
console.log(pizza4)



// bonus challenge

function randomPizza() {
var pizza = {};
crustPick = ["traditional pan", "neapolita crust", "sicilian crust"]
saucePick = ["pesto", "white garlic", "buffalo"]
cheesesPick = ["provolone", "cheddar", "gorgonzola"]
toppingsPick = [ "BBQ Chicken", "pepperoni", "ham", "olives"]

pizza.crust = crustPick[Math.floor(Math.random() * crustPick.length)]
pizza.sauce = saucePick[Math.floor(Math.random() * saucePick.length)]
pizza.cheeses = cheesesPick[Math.floor(Math.random() * cheesesPick.length)]
pizza.toppings = toppingsPick[Math.floor(Math.random() * toppingsPick.length)]
console.log(pizza)
}

randomPizza()