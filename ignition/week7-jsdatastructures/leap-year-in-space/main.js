class Year {
  // your code, here
  constructor(year) {
    this.year = year;

  }
  isLeapYear() {
    if (this.year % 4 == 0) {
      return true
    } else {
      return false
    }
  }
  printLeaps() {
    for (let i = 2000; i <= 2100; i ++) {
      if (i % 4 == 0) {
        console.log(i);
      }
    }
    return "\n";
  }
}

let currentYear = new Year(2017)
console.log(currentYear.isLeapYear())
let newCurrentYear = new Year(2020)
console.log(newCurrentYear.isLeapYear())
console.log(currentYear.printLeaps())
