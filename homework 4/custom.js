const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = [
  'Диференційне рівняння',
  'Теорія автоматів',
  'Алгоритми і структури даних',
];
const marks = [4, 5, 5, 3, 4, 5];

const getPair = () => {
  let girls = [];
  let boys = [];
  let pair = [];
  for (all of students) {
    all.endsWith('а') ? girls.push(all) : boys.push(all);
  }
  for (let i = 0; i < students.length / 2; i++) {
    pair.push([boys[i], girls[i]]);
  }
  return pair;
};
const pairs = getPair(students);
console.log(pairs);

const getPairsWithThemes = (pairs, themes) => {
  const pairsWhithThemes = [];
  pairs.forEach((pair, i) => {
    const getherPair = [pair[0] + ' i ' + pair[1], themes[i]];
    pairsWhithThemes.push(getherPair);
  });
  return pairsWhithThemes;
};
const pairsWithThemes = getPairsWithThemes(pairs, themes);
console.log(pairsWithThemes);

const getStudentsMarks = (students, marks) => {
  const studentMark = [];
  for (let i = 0; i < students.length; i++) {
    studentMark.push([students[i], marks[i]]);
  }
  return studentMark;
};

const studentsMarks = getStudentsMarks(students, marks);
console.log(studentsMarks);

const putMarksForPairs = () => {
  const result = [];
  const minMark = 1;
  const maxMark = 5;
  pairsWithThemes.forEach((pairs) => {
    const randomMark = Math.floor(
      Math.random() * (maxMark - minMark + 1) + minMark
    );
    result.push([pairs, randomMark]);
  });

  return result;
};

const marksForPairs = putMarksForPairs(pairsWithThemes);
console.log(marksForPairs);
