let rocket = {
  fuel: 0,
  addFuel(moreFuel) {
    this.fuel = this.fuel + moreFuel;
    return this.fuel
  },
  fireFunction() {
    if (this.fuel > 0) {
      this.fuel = this.fuel - 1;
      console.log('The engines have been fired!');
      return true;
    } else {
      console.log('The engines have failed to fire!');
      return false;
    }
  }
}

module.exports = rocket;
