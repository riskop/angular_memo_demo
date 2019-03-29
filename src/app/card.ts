import {Pair} from "./pair";

export class Card {
  private pair: Pair;
  
  constructor(pair: Pair) {
    this.pair = pair;
  }

  getPair(): Pair {
    return this.pair;
  }

  isTurned():boolean {
    if(
      this.pair.getDesk().getTurned1() === this ||
      this.pair.getDesk().getTurned2() === this
    ) {
      return true;
    }
    return false;
  }
}