"use strict";
function greedingFriends(...friends) {
    friends.forEach((friend) => console.log(`hi ${friend}`));
}
console.log("history", greedingFriends("akash", "batas", "megh", "katla", "argho"));
