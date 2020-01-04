let responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes, definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
]
// your code, here
// Confirm the correct number of responses have been stored by printing the number to the console (`20`)
console.log(responses.length)

// Ask the user what their question is, and store it as a variable called `question`
let question = prompt("What is your question?")

// Output a random response to the user's question
let randResponse = responses[Math.floor(Math.random() * responses.length)];
console.log(randResponse)

// Output the number of responses that include the word "yes"
var responsesLower = responses.map((reply)=>{
  return reply.toLowerCase();
})
console.log(responsesLower)

const yWord = responsesLower.filter(word => word.indexOf('yes') > -1).length;
console.log(yWord)

// Output the number of responses that include the words "no" or "not"
const nWord = responsesLower.filter(word => word.indexOf('no') > -1).length + responsesLower.filter(word => word.indexOf('not') > -1).length;
console.log(nWord)

// Output the alphabetized list of responses
let resAlp = responses.sort()
console.log(resAlp)

// Output the first and last responses from the alphabetized list
console.log(resAlp[0])
console.log(resAlp[resAlp.length-1])

// Delete two of the negative responses
let i = resAlp.indexOf("Cannot predict now")
resAlp.splice(i,1)
let i2 = resAlp.indexOf("Don't count on it")
resAlp.splice(i2,1)

console.log(resAlp)
// Reassign 'Ask again later' to the beginning of the array
let r = resAlp.indexOf("Ask again later")
resAlp.splice(r,1)
resAlp.unshift("Ask again later")
console.log(resAlp)
// Add 1 response of your choosing to the current list
resAlp.push("idk bro")

// Concat an **array** of 3 additional responses to the current list
let newArray = ["Bet", "Ask your mom", "Mom said no"]
let finalResponse = resAlp.concat(newArray)

// Confirm the correct number of responses have been removed and added by printing the number of responses to the console (`22`)
console.log(finalResponse.length)
