const richUser = {
  age: 25,
  name: "kollol",
  blance: 25,
  luck(number: number) {
    return `now my total blance is ${this.blance + number}`;
  },
};

console.log(richUser.luck(520));
