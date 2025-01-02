{
  type name = string;
  type age = number;
  type roll = number;
  type phnNo = string;

  const herName1: name = "polash";

  type Student = {
    name: string;
    age: number;
    roll: number;
    class: string;
  };

  const student1: Student = {
    name: "batas",
    age: 25,
    roll: 26,
    class: "seven",
  };

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 * num2;
}
