import { SHA256 } from "crypto-js";

export interface BlockTypes<T extends string> {
  index?: number | undefined;
  timeStamp?: number | undefined;
  data: T;
  prevHash: string;
}

export class Block<T extends string> {
  index?: number | undefined;
  timeStamp?: number | undefined;
  data: T;
  prevHash: string;
  hash: string;
  constructor({ index = 1, timeStamp, data, prevHash = "" }: BlockTypes<T>) {
    this.index = index;
    this.timeStamp = timeStamp || Date.now();
    this.prevHash = prevHash;
    this.data = data;
    this.hash = this.calcHashValue();
  }
  private calcHashValue() {
    return SHA256(
      this.index + this.prevHash + this.timeStamp + JSON.stringify(this.data)
    ).toString();
  }
}
