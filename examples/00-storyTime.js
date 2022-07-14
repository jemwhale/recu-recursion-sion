/*
Just a stupid example.
*/

function storyTime (n) {
  if (n == 0) {
    return '"Beans!"'
  }
  return `"There were three men sat around a fire, and one man said, "Tell us a story, Jack!" So Jack said:\n${storyTime(n-1)}"`
}

console.log(storyTime(1))
console.log('')
console.log(storyTime(2))
console.log('')
console.log(storyTime(3))
