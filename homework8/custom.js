class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = [5, 4, 4, 5];
  }

  getInfo() {
    return `Студент ${this.course} курсу ${this.university} м.Одеса, ${this.fullName}`;
  }
  get getMarks() {
    return this.marks;
  }
  set setMarks(mark) {
    return this.marks.push(mark);
  }
  getAvarageMark() {
    let sum = 0;
    this.marks.forEach((mark) => {
      sum += mark;
    });
    return +(sum / this.marks.length);
  }
  dismiss() {
    return (this.marks = [null]);
  }
  recover() {
    return (this.marks = [5, 4, 4, 5]);
  }
}
const vlad = new Student(`КПІ`, '5', 'Іванов Іван Іванович');

console.log(`Інформація про студента:`, vlad.getInfo());
console.log('Массив оцінок:', vlad.getMarks);
vlad.setMarks = 5;
console.log('Оцінка студента:', vlad.getMarks);
console.log('Середній бал:', vlad.getAvarageMark());
console.log('Виключення студента:', vlad.dismiss());
vlad.setMarks = 5;
console.log('Поновлення студента:', vlad.recover());
