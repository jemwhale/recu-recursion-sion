/*
Suppose we want to climb some stairs, and at each step, we can either
 - take 1 step, or
 - take 2 steps
How many ways are there of climbing 30 steps?

If there were just 4 steps, we could count them by hand:
  - 1, 1, 1, 1
  - 2, 1, 1
  - 1, 2, 1
  - 1, 1, 2
  - 2, 2
so there are 5 ways in total.

But doing this for 30 steps would be absurd!

Let's look at 4 steps again. We could answer this by thinking about:

  How many ways can we do three steps?: 1,1,1    1,2    2,1
  Now add a 1 step to each of these: 1,1,1,1    1,2,1    2,1,1

  How many ways can we do two steps?: 1,1    2
  Now add a 2 step to each of these: 1,1,2    2,2

Now we have all the ways of doing four steps!

We can use recursion to use the same method for bigger numbers.
*/

function countSteps (n) {
  if (n === 1) {
    return 1 // 1
  }
  if (n == 2) {
    return 2 // 1,1 or 2
  }
  return countSteps(n-1) + countSteps(n-2)
}

console.log(countSteps(4))
console.log(countSteps(30))
