import { Block, BlockTypes, MiningBlockTypes } from "./Block";

interface BlockChainTypes extends MiningBlockTypes {
  chain: Array<Block>;
}

interface GenesisBlockTypes {
  genesisBlockData: string;
  genesisPreviousHash: string;
}

export default class BlockChain implements BlockChainTypes {
  chain: Block[];
  difficulty: "2" | "4" | "6";
  constructor({
    difficulty,
    ...props
  }: GenesisBlockTypes & Pick<BlockChainTypes, "difficulty">) {
    this.chain = [this.initGenesisBlock(props)];
    this.difficulty = difficulty;
  }

  private initGenesisBlock({
    genesisBlockData,
    genesisPreviousHash,
  }: GenesisBlockTypes) {
    return new Block({ data: genesisBlockData, prevHash: genesisPreviousHash });
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  createNewBlock({ data }: Omit<BlockTypes, "prevHash">) {
    const lastBlock = this.getLastBlock();
    const block = new Block({
      index: (lastBlock.index as number) + 1,
      data,
      prevHash: lastBlock.hash,
    });
    block.minBlock({ difficulty: this.difficulty });
    this.chain.push(block);
  }

  getChainResult() {
    this.chain.forEach((block, index) => {
      console.log(block);
      index < this.chain.length - 1 && console.log("||");
    });
  }

  isBlockChainValid() {
    let valid = true;
    for (let i = 1; i < this.chain.length; i++) {
      const [currentBlock, prevBlock] = [this.chain[i], this.chain[i - 1]];
      if (currentBlock.hash !== currentBlock.calcHashValue()) valid = false;
      if (currentBlock.prevHash !== prevBlock.hash) valid = false;
    }
    console.log(`Blockchain is ${valid ? "" : "not "}valid`);
  }
}
