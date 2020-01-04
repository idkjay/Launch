let number = 3;
let ranNum = Math.floor(Math.random() * number);
class Spaceship {
  constructor(name){
    this.name = name;
    this.crew = [ ];
    this.propulsion = null;
  };
  loadCrew(crewArray) {
    crewArray.forEach(member => this.crew.push(member));
    this.crew.forEach(member => console.log(`${member} is now aboard the ${this.name}.`));
  };
  captain() {
    return this.crew[ranNum];
  };
  mountPropulsion(rocket) {
    this.propulsion = rocket;
    return this.propulsion;

  };
  takeOff() {
    if (this.propulsion === true) {
      console.log("reeeeeeeeeeeeeeee")
    } else {
      console.log("Takeoff unsucessful!")
    }
  }


}

module.exports = Spaceship;
