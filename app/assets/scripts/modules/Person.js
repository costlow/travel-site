class Person {
  constructor(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
  }

  greet() {
    console.log("Hi, my name is " + this.name + " and my fav color is " + this.favoriteColor + ".");
  }
}

export default Person;
