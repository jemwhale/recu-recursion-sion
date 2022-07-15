/*
Suppose we have a list of pizza toppings:
  pepperoni
  mushroom
  pineapple (YES IT IS GOOD)
  red onion
We can choose up to 3 toppings for our pizza.
We are allowed to repeat toppings.
Can we list all possible pizzas?

Let's suppose we can have only two toppings. Here are the pizzas:
[
  'pepperoni, pepperoni',
  'pepperoni, mushroom',
  'pepperoni, pineapple',
  'pepperoni, red onion',
  'mushroom, pepperoni',
  'mushroom, mushroom',
  'mushroom, pineapple',
  'mushroom, red onion',
  'pineapple, pepperoni',
  'pineapple, mushroom',
  'pineapple, pineapple',
  'pineapple, red onion',
  'red onion, pepperoni',
  'red onion, mushroom',
  'red onion, pineapple',
  'red onion, red onion'
]
By adding each topping to each of these base pizzas, we can make all pizzas with 3 toppings.
We can use getPizzas(2) to find getPizzas(3)!
*/

function getPizzas (toppings, n) {
  if (n === 1) {
    return toppings
  }
  const result = []
  const basePizzas = getPizzas(toppings, n-1)
  for (let base of basePizzas) {
    for (let top of toppings) {
      result.push([base, top].join(', '))
    }
  }
  return result
}

// let's try it out

const toppings = [
  'pepperoni',
  'mushroom',
  'pineapple',
  'red onion'
]

console.log(getPizzas(toppings, 3))
