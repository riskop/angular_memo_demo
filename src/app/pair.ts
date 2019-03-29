import {Card} from "./card";
import {Desk} from "./desk";

export class Pair {
  private card1: Card;
  private card2: Card;
  private title: string;
  private desk: Desk;
  private found: boolean;

  constructor(title: string, desk: Desk) {
    this.found = false;
    this.title = title;
    this.card1 = new Card(this);
    this.card2 = new Card(this);
    this.desk = desk;
  }

  public getTitle(): string {
    return this.title;
  }

  public getDesk(): Desk {
    return this.desk;
  }

  public getCard1(): Card {
    return this.card1;
  }

  public getCard2(): Card {
    return this.card2;
  }

  public setFound() {
    this.found = true;
  }

  public isFound(): boolean {
    return this.found;
  }
}