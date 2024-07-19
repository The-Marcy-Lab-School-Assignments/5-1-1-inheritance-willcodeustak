class Quadrilateral {
  /** FEEDBACK: Please use white space to keep code neat! Use a linter if you need to! */
constructor (side1,side2,side3,side4){
this.side1 = side1;
this.side2 = side2;
this.side3 = side3;
this.side4 = side4;
}
getPerimeter() {
  return this.side1 + this.side2 + this.side3 + this.side4;
}
}
class Rectangle extends Quadrilateral { //inherits
  constructor(side1,side2) {
    /** FEEDBACK: This comment seems to be out of place! */
    super(side1,side2,side1,side2);   //              // invoke the Person constructor, setting the name, age, and friends properties on `this`
//inheritance
  }
  getArea(){ 
    return this.side1 * this.side2; //area multiply 
    //counts as a new rectangle instance?
  }
}

class Square extends Rectangle{
  constructor(side1) {
    super(side1,side1,side1,side1)
  }
  /** FEEDBACK: This could go on the Rectangle since you can get the diagonal of a rectangle too! */
  getDiagonal(){
      return Math.sqrt(this.side1 ** 2 + this.side1 ** 2)
      //return this.side1 * Math.sqrt(2)
  }
}

/* Be creative with this one! */
class Person {

}

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person,
};
