import { SHA256 } from "crypto-js";
import BlockChain from "./Blockchain";

const HoggyCoin = new BlockChain({
  genesisBlockData: "Hoggy Start",
  genesisPreviousHash: SHA256(234534 + "Hoggy Start").toString(),
  difficulty: "4",
});

console.log("Mining block 1....");

HoggyCoin.createNewBlock({
  data: "Lesson",
});

console.log("Mining block 2....");

HoggyCoin.createNewBlock({
  data: "Courses",
});

HoggyCoin.getChainResult();

HoggyCoin.isBlockChainValid();

HoggyCoin.chain[1].data = "Tamper";

HoggyCoin.isBlockChainValid();
