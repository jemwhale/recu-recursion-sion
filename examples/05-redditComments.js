/*
In reddit, we often see things like

COMMENTS
---
This is awesome

  No it isn't

    You're wrong

      Whatever

      No she's not
  
  No, you are awesome :D

I know this guy!

  Me too!

I'm hungry

  Hi hungry, I'm dad!

    Terrible dad joke

    LMAO!
---
*/

const comments = [
  {
    text: `This is awesome`,
    children: [
      {
        text: `No it isn't`,
        children: [
          {
            text: `You're wrong`,
            children: [
              {
                text: `Whatever`,
                children: []
              },
              {
                text: `No she's not`,
                children: []
              }
            ]
          }
        ]
      },
      {
        text: `No, you are awesome :D`,
        children: []
      }
    ]
  },
  {
    text: 'I know this guy!',
    children: [
      {
        text: 'Me too!',
        children: []
      }
    ]
  },
  {
    text: `I'm hungry`,
    children: [
      {
        text: `Hi hungry, I'm dad!`,
        children: [
          {
            text: 'Terrible dad joke',
            children: []
          },
          {
            text: 'LMAO!',
            children: []
          }
        ]
      }
    ]
  }
]

/*
At each level of recursion, we are dealing with an array of comments.

We want to add the text to our current string with the correct level of indentation.

If there are no children, we want don't do anything else and move to the next comment.

If there are children, we add them too with the correct indentation before continuing.
*/

// a helper function to get the indentation: '  ' * n
function getIndent (n) {
  indent = ''
  for (let i = 0; i < n; i++) {
    indent += '  '
  }
  return indent
}

// the recursive fuction to display comments
function formatComments (comments, depth) {

  // start with an empty string
  response = ''

  // for each comment in the current array
  comments.forEach((comment) => {

    // we add its text to the response
    response += getIndent(depth) + comment.text + '\n\n' 

    // if there are children, we add them too before continuing to the next comment
    if (comment.children.length) { 
      response += formatComments(comment.children, depth + 1)
    }

  })

  return response
}

console.log(`
COMMENTS
---
${formatComments(comments, 0).trim()}
---
`)
