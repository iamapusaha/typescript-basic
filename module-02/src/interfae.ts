{
  type Name = string;
  const name: Name = "saha";

  type UserWithRoll = Name & { roll: string };

  type User = {
    name: string;
    age: number;
  };

  interface userWithRoll1 extends User {
    roll: string;
  }

  type User1 = {
    name: string;
    age: number;
    roll: number;
  };

  interface User2 {
    name: string;
    age: number;
    roll: number;
  }

  const user: userWithRoll1 = {
    name: "saha",
    age: 25,
    roll: "small",
  };

  type Students = {
    [index: number]: number;
  };

  type Students1 = number[];
  const students: Students1 = [10, 25, 45, 78];

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 * num2;

  const add1: Add = (num1, num2) => {
    return num1 * num2;
  };
}
