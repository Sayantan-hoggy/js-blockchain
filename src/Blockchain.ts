import { Block, BlockTypes } from "./Block";

interface BlockChainTypes {
  chain: Array<Block<string>>;
}

interface GenesisBlockTypes<T> {
  genesisBlockData: T;
  genesisPreviousHash: string;
}

export default class BlockChain implements BlockChainTypes {
  chain: Block<string>[];
  constructor(props: GenesisBlockTypes<string>) {
    this.chain = [this.initGenesisBlock(props)];
  }

  private initGenesisBlock({
    genesisBlockData,
    genesisPreviousHash,
  }: GenesisBlockTypes<string>) {
    return new Block({ data: genesisBlockData, prevHash: genesisPreviousHash });
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  createNewBlock({ data }: Omit<BlockTypes<string>, "prevHash">) {
    const lastBlock = this.getLastBlock();
    const block = new Block({
      index: (lastBlock.index as number) + 1,
      data,
      prevHash: lastBlock.hash,
    });
    this.chain.push(block);
  }

  getChainResult() {
    this.chain.forEach((block, index) => {
      console.log(block);
      index < this.chain.length - 1 && console.log("||");
    });
  }
}
