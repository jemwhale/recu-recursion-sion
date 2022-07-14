/*
How many strings of length 10 can you make using only 'a' and 'b'?
Can you write them all down?

If the question said of length 3, we could do this by hand:
  'aaa'
  'aab'
  'aba'
  'baa'
  'abb'
  'bab'
  'bba'
  'bbb'
How could we approach this problem with recursion?
Suppose we have the answers for length 2:
  'aa'
  'ab'
  'ba'
  'bb'
If we add 'a' to the front of each one, and 'b' to the front of each one,
we get the answer for length 3:
  'a' + 'aa'
  'a' + 'ab'
  'a' + 'ba'
  'a' + 'bb'

  'b' + 'aa'
  'b' + 'ab'
  'b' + 'ba'
  'b' + 'bb'
If we knew combinations(9), we could get combinations(10) just by prepending 'a' and 'b'.
So we have the idea of how our recursion can work.
*/

function getCombinations (n) {
  if (n === 0) {
    return ['']
  }
  const stubs = getCombinations(n-1)
  const response = []
  for (let stub of stubs) {
    response.push('a' + stub)
    response.push('b' + stub)
  }
  return response
}

for (let s of getCombinations(10)) {
  console.log(s)
}
