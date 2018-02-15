class Person {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }

  isTall() {
    return this.height > 200 ? "is tall" : "is not tall";
  }
}

export default Person;
