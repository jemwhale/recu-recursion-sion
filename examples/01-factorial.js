/*
When deciding if recursion can help solve a problem, the key is to think about this:

"if I know the answer for a simpler case, can I use it to get the answer I need?"

The factorial function in maths works out the product of all integers smaller than or equal to the input.

e.g.  factorial(4) = 4*3*2*1
      factorial(5) = 5*4*3*2*1
      factorial(6) = 6*5*4*3*2*1

Here, we can see clearly that

      factorial(5) = 5 * (4*3*2*1)
                   = 5 * factorial(4)

so we can find factorial(5) if we know factorial(4).
*/

function factorial (n) {

  // if n = 1, we just return the answer:
  if (n == 1) {
    return 1
  }
  // otherwise, we use the previous answer to get the answer we neeed:
  return n * factorial(n - 1)

}

console.log(factorial(5))

// It is a good idea to go through, step-by-step, exactly what happens when factorial 5 is called!
