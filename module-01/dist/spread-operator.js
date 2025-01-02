"use strict";
const bros1 = ["akash", "batas", "hawa"];
const bros2 = ["nill", "pakhi", "surjo"];
bros1.push(...bros2);
console.log(bros1);
const broForPro1 = {
    js: "hasan",
    react: "mausm",
    quary: "tushar",
};
const broForPro2 = {
    mongoDB: "rasel",
    prisma: "kuddos",
    next: "niloy",
};
const proList = Object.assign(Object.assign({}, broForPro1), broForPro2);
console.log(proList);
