// your code, here

//part 1
// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
// }
//
// console.log(new Rectangle(5,6))

//part 2

// class Rectangle {
//   constructor(width,height) {
//     this.width = width;
//     if (height) {
//       this.height = height;
//     } else {
//       this.height = width;
//     }
//   }
// }
// console.log(new Rectangle(5))

//part 3

class Rectangle {
  constructor(width,height) {
    this.width = width;
    if (height) {
      this.height = height;
    } else {
      this.height = width
    }
  }
  area() {
    return this.width * this.height;
  }
}
let rectangle = new Rectangle(5,6)
console.log(rectangle.area())
