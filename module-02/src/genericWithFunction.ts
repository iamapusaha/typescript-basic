{
  const createArry = (param: string): string[] => {
    return [param];
  };
  const createArryWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  type employ = {
    id: number;
    name: string;
  };
  const result = createArry("hello");
  const res1 = createArryWithGeneric<number>(25685);
  const res2 = createArryWithGeneric<employ>({
    id: 15,
    name: "saha",
  });
  const createArryWithGenericTupple = <T, X>(param1: T, param2: X): [T, X] => {
    return [param1, param2];
  };
  type employ1 = {
    id: number;
    name: string;
  };
  const result1 = createArryWithGenericTupple<string, number>("hello", 5556);
  const res10 = createArryWithGenericTupple<number, { name: string }>(25685, {
    name: "hlw babe",
  });
  const res22 = createArryWithGenericTupple<employ, string>(
    {
      id: 15,
      name: "saha",
    },
    "joss"
  );
  type Student = {
    id: number;
    name: string;
    class: string;
  };
  const addStudentToOurCourse = <T>(student: T) => {
    const course = "Next level web development course";

    return { ...student, course };
  };

  const response = addStudentToOurCourse<Student>({
    id: 784,
    name: "kamal",
    class: "four",
  });
}
