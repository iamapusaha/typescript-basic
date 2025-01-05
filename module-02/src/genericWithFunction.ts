{
  const createArry = (param: string): string[] => {
    return [param];
  };
  const createArryWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const result = createArry("hello");
  const res1 = createArryWithGeneric<number>(25685);
}
