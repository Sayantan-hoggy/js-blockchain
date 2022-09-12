import { Block } from "./Block";

const block1 = new Block<string>({
  index: 1,
  timeStamp: Date.now(),
  data: "S",
  prevHash: "0000",
});

console.log(block1);
