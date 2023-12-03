const fs = require("fs");
const readline = require("readline");
const filePath = "./input.txt";
const readStream = fs.createReadStream(filePath, "utf8");
let total = 0;

const rl = readline.createInterface({
  input: readStream,
  output: process.stdout,
});

rl.on("line", (line) => {
  //solution
});

rl.on("close", () => {
  console.log(`Total Sum = ${total}`);
});
