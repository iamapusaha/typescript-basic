{
  type FrontendDeveloper = "fakibuz developer" | "valo developer";
  type FullstackDeveloper = "frontend developer" | "backend developer";

  type ValoDeveloper = FrontendDeveloper | FullstackDeveloper;

  type User = {
    name: string;
    age: number;
    class: 6 | 7 | 8 | 9 | 10;
    roll: number;
  };
  const user: User = {
    name: "akash",
    age: 72,
    class: 10,
    roll: 58,
  };
}
