const students = [
  {
    name: 'Tanya',
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: 'Victor',
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: 'Anton',
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

1;
const getSubjects = (student) =>
  Object.keys(student.subjects).map((subject) => {
    return (
      subject[0].toUpperCase() + subject.slice(1).toLocaleLowerCase()
    ).replaceAll('_', ' ');
  });

console.log(getSubjects(students[0]));

2;
const getAverageMark = (student) => {
  let sumOfMarks = [];
  for (key in student.subjects) {
    sumOfMarks = sumOfMarks.concat(student.subjects[key]);
  }
  return +(
    sumOfMarks.reduce((sum, mark) => sum + mark) / sumOfMarks.length
  ).toFixed(2);
};
const averageMark = getAverageMark(students[1]);
console.log(averageMark);

//3
const getStudentInfo = (student) =>
  `course: ${student.course}, name: ${
    student.name
  }, averageMark: ${getAverageMark(student)}`;

const studentInfo = getStudentInfo(students[0]);
console.log(studentInfo);

//4
const getStudentsNames = (students) => students.map((name) => name.name).sort();
const studentsNames = getStudentsNames(students);
console.log(studentsNames);
