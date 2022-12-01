const fs = require("fs");

const numbers = fs
  .readFileSync("./input.txt", "utf-8")
  .split("\n\n")
  .map((elfWeight) =>
    elfWeight
      .split("\n")
      .map((item) => Number.parseInt(item))
      .reduce((prev, curr) => prev + curr, 0)
  )
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((prev, curr) => prev + curr, 0);

console.log(numbers);
