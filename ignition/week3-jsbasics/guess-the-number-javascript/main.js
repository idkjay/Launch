// YOUR CODE HERE
let randNum = (Math.floor(Math.random()*10+1))
console.log(randNum)
let nameName = prompt("What's your name homie?")
let numCho = prompt(`Alright ${nameName}, guess a number between 1 and 10.`)
numCho = parseInt(numCho)
console.log(numCho)
if (numCho === randNum) {
  alert(`Congratulations, ${nameName}, you guessed the right number!`)
} else {
  alert(`You guessed wrong! You lost, ${nameName}! The random number was ${randNum}.`)
}
