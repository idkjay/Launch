let Spaceship = require('./Spaceship.js');
let Rocket = require('./Rocket.js');
let CrewMember = require('./CrewMember.js');

let = crewNames = ['Sabrina', 'Jason', 'Andrew'];

let launchpad = (ship, crewArray,rocket) => {
  console.log('Initiating preflight procedures.');
  console.log(`Welcome aboard the ${ship.name}!`);
  ship.loadCrew(crewArray);
  console.log(`${ship.captain()} is the captain of the ${ship.name}.`);
  ship.mountPropulsion(rocket);
  ship.propulsion.addFuel(500);
  ship.propulsion.fireFunction();
  ship.takeOff(rocket);

}
let ourShip = new Spaceship('Exia');

let trainCrew = (crewArray) => {
  crewArray.forEach(member => member.trained = true)
};
trainCrew(crewNames);
launchpad(ourShip,crewNames, Rocket);
