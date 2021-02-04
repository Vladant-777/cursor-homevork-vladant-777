export class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = [5, 4, 4, 5];
  }

  getInfo() {
    return `Студент ${this.course} курсу ${this.university} м.Одеса, ${this.fullName}`;
  }
}
