import { SHA256 } from "crypto-js";
import BlockChain from "./Blockchain";

const HoggyCoin = new BlockChain({
  genesisBlockData: "Hoggy Start",
  genesisPreviousHash: SHA256(234534 + "Hoggy Start").toString(),
});

HoggyCoin.createNewBlock({
  data: "Lesson",
});

HoggyCoin.createNewBlock({
  data: "Courses",
});

HoggyCoin.getChainResult();
