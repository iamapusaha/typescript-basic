const myObj = {
  name: {
    firstName: "akash",
    middleName: "kumer",
    lastName: "sarkar",
  },
  age: 25,
  company: "batas",
};

const {
  company: kamlaAt,
  name: { middleName },
} = myObj;

const friendsList = ["torjo", "sham", "kajal", "pagla"];
const [a, b, bestFriend, ...rest] = friendsList;

console.log(bestFriend);
