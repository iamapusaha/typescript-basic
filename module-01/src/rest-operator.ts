function greedingFriends(...friends: string[]) {
  friends.forEach((friend: string) => console.log(`hi ${friend}`));
}

console.log(
  "history",
  greedingFriends("akash", "batas", "megh", "katla", "argho")
);
