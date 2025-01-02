const bros1: string[] = ["akash", "batas", "hawa"];
const bros2: string[] = ["nill", "pakhi", "surjo"];

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

const proList = {
  ...broForPro1,
  ...broForPro2,
};
console.log(proList);
