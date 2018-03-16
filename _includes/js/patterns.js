/* Object literal pattern used on older sites */
var modal = {
  init: function() {

  }
};

/* ES2015 class w/ webpack */
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}
