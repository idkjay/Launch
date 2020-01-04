// your code, here
let jordan = {
  firstName: "Jordan",
  lastName: "Chu",
  hometown: "Winchester, MA",
  occupation: "student",
  catchPhrase: "Bet",
  name() {
    return this.firstName + " " + this.lastName
  }
}
console.log(jordan)
console.log(jordan.name())
