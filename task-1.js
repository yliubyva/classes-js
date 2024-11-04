"use strict";

class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    this._radius = value;
  }

  get diameter() {
    return this._radius * 2;
  }

  calcCircleArea() {
    let area = Math.PI * this._radius * this._radius;
    return Math.round(area);
  }

  calcCircleLength() {
    let length = 2 * Math.PI * this._radius;
    return Math.round(length);
  }
}

const myCircle = new Circle(34);
console.log("Радіус:", myCircle.radius);
console.log("Діаметр:", myCircle.diameter);
console.log("Площа:", myCircle.calcCircleArea());
console.log("Довжина:", myCircle.calcCircleLength());

myCircle.radius = 54;
console.log("Новий радіус:", myCircle.radius);
console.log("Новий діаметр:", myCircle.diameter);
