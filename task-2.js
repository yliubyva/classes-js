"use strict";

class Marker {
  constructor(color, inkLevel) {
    this.color = color;
    this.inkLevel = inkLevel;
  }

  write(text) {
    let result = "";
    for (let char of text) {
      if (this.inkLevel <= 0) {
        console.log("Чорнило закінчилось!");
        break;
      }

      if (char !== " ") {
        if (this.inkLevel >= 0.5) {
          result += char;
          this.inkLevel -= 0.5;
        }
      } else {
        result += char;
      }
    }

    console.log(`%c${result}`, `color: ${this.color}`);
  }
}

class RefillableMarker extends Marker {
  constructor(color, inkLevel) {
    super(color, inkLevel);
  }

  refill(inkAmount) {
    this.inkLevel += inkAmount;
    if (this.inkLevel > 100) {
      this.inkLevel = 100;
    }
    console.log(`Маркер заправлено. Поточний рівень чорнил: ${this.inkLevel}%`);
  }
}

const myMarker = new Marker("blue", 10);
myMarker.write("Привіт, друже! Це синій маркер");

const refillableMarker = new RefillableMarker("green", 5);
refillableMarker.write("Це зелений маркер. Давайте спробуємо щось написати");
refillableMarker.refill(50);
refillableMarker.write(
  "Тепер маркер заправлений, і ми можемо продовжувати писати"
);
