console.log("This is Tutorial31.js");

class Employee {
  constructor(givenName, givenExperience, givenDivision) {
    this.name = givenName;
    this.experience = givenExperience;
    this.division = givenDivision;
  }
  slogan() {
    return `I am ${this.name} and I work at dassualt`;
  }
  joiningYear() {
    return 2022 - this.experience;
  }
  static add(a, b) {
    return a + b;
  }
}
class Programmer extends Employee {
  constructor(givenName, givenExperience, givenDivision, language, github) {
    super(givenName, givenExperience, givenDivision);
    this.language = language;
    this.github = github;
  }

  favouriteLanguage() {
    if (this.language == 'python') {
      return 'Python';
    }
    else {
      return 'SQL,Solidity,Rust';
    }
  }
  static multiply(a, b) {
    return a * b;
  }
}

// harry = new Employee("Saurabh", 26, "Software");
// console.log(harry.joiningYear());
// console.log(Employee.add(34, 5));
rohan = new Programmer("Rohan", 3, "Web Developer Head", "HTML,CSS,JAVASCRIPT,C++,C,PYTHON,SQL,REACT.JS", "Overcastbulb")
console.log(rohan);
console.log(rohan.favouriteLanguage());
console.log(Programmer.multiply(5, 5));