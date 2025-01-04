{
  type genericType<T> = Array<T>;
  const rollNumber: genericType<number> = [12, 45, 78, 96];
  const friends: string[] = ["rokhom", "korim", "akash", "batas"];
  const results: boolean[] = [true, false, true, false];

  const user: genericType<{
    name: string;
    age: number;
    roll: string;
  }> = [
    {
      name: "saha",
      age: 25,
      roll: "small",
    },
  ];
}
