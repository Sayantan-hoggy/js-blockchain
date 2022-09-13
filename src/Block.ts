import { SHA256 } from "crypto-js";

export interface BlockTypes {
  index?: number | undefined;
  timeStamp?: number | undefined;
  data: string;
  prevHash: string;
}

export interface MiningBlockTypes {
  difficulty: "2" | "4" | "6";
}

export class Block {
  index?: number | undefined;
  timeStamp?: number | undefined;
  data: string;
  prevHash: string;
  hash: string;
  nonce: number;
  constructor({ index = 1, timeStamp, data, prevHash = "" }: BlockTypes) {
    this.index = index;
    this.timeStamp = timeStamp || Date.now();
    this.prevHash = prevHash;
    this.data = data;
    this.hash = this.calcHashValue();
    this.nonce = 0;
  }
  calcHashValue() {
    return SHA256(
      this.index +
        this.prevHash +
        this.timeStamp +
        JSON.stringify(this.data) +
        this.nonce
    ).toString();
  }

  minBlock({ difficulty }: MiningBlockTypes) {
    while (
      this.hash.substring(0, +difficulty) !== Array(+difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.calcHashValue();
    }

    console.log("Block mined -> " + this.hash);
  }
}
