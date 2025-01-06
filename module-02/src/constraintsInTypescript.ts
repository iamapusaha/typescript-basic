const addStudentsToOurCourse = <
  T extends { id: number; name: string; stack: string }
>(
  student: T
) => {
  const course = "Next Level Web Development";
  return {
    ...student,
    course,
  };
};

const student1 = addStudentsToOurCourse({
  id: 475,
  name: "saha",
  stack: "Full Stack Web Development",
});
const student2 = addStudentsToOurCourse({
  id: 475,
  name: "saha",
  stack: "vinno level",
  apple: "stocked",
});
