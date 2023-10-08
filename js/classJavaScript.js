class Person {
  constructor(name) {
    this.name = name;
  }

  get reversedName() {
    return this.name.split("").reverse().join("");
  }
}

const perso = new Person("David");

console.log(perso.reversedName); 
