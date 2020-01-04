var rami = 88
var natoya = 92
var max = 68
var lynn = 100
var team1 = []
team1.push(rami,natoya,max,lynn)
console.log(team1)
for (var i = 0, sum1 = 0; i < team1.length; sum1 += team1[i++]);
console.log(`The average of Team 1's scores is ${Math.round(sum1/team1.length)}.`)

var sasha = 82
var mohammed = 98
var jennifer = 94
var denise = 92
var team2 = []
team2.push(sasha,mohammed,jennifer,denise)
console.log(team2)
for (var i = 0, sum2 = 0; i < team2.length; sum2 += team2[i++]);
console.log(`The average of Team 2's scores is ${Math.round(sum2/team2.length)}.`)

console.log(`\nThe average for both teams combined is ${Math.round((sum1+sum2)/(team1.length+team2.length))}.`)

var bigTeam = team1.concat(team2)
console.log(bigTeam)
let smartPeople = 0
bigTeam.forEach((testScore) => {
  if (testScore > 70) {
    smartPeople ++
  }
})
console.log(`\n${smartPeople} explorers have passed the exam!`)
