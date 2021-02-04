export function breakIntoPairs(arrStudents) {
  const copyArrStudents = [...arrStudents];
  return [
    [copyArrStudents[0], copyArrStudents[2]],
    [copyArrStudents[1], copyArrStudents[3]],
    [copyArrStudents[4], copyArrStudents[5]],
  ];
}

export function setThemsForStudens(arrStudentsPairs, arrThemes) {
  return arrStudentsPairs.map((arrStudent, index) => [
    arrStudent.join(' і '),
    arrThemes[index],
  ]);
}
