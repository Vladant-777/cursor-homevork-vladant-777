export const getSubjects = (stdent) =>
  Object.keys(stdent.subjects).map((subject) => {
    return (
      subject[0].toUpperCase() + subject.slice(1).toLocaleLowerCase()
    ).replaceAll('_', ' ');
  });
