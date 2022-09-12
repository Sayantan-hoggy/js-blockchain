import { SHA256 } from "crypto-js";

interface BlockTypes<T extends unknown> {
  index?: number | undefined;
  timeStamp?: number | undefined;
  data: T;
  prevHash: string;
}

export class Block<T extends unknown> {
  index?: number | undefined;
  timeStamp?: number | undefined;
  data: T;
  prevHash: string;
  private hash: string;
  constructor({ index, timeStamp, data, prevHash = "" }: BlockTypes<T>) {
    this.index = index;
    this.timeStamp = timeStamp;
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
