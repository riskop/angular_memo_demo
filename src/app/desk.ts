import {Card} from "./card";
import {Pair} from "./pair";
import arrayShuffle from "array-shuffle";

export class Desk {
  private turned1: Card;
  private turned2: Card;
  private cards: Card[];
  private score: number;

  constructor() {
    this.cards = [];
    this.score = 0;
    for(let i:number = 1; i<7; i++) {
      this.addPair(i+'');
    }
    this.shuffleCards();
  }

  public addPair(title: string) {
    let desk: Desk = this;
    let pair: Pair = new Pair(title, desk);
    this.cards.push(pair.getCard1());
    this.cards.push(pair.getCard2());
  }

  public shuffleCards() {
    this.cards = arrayShuffle(this.cards);
  }

  public click(card: Card) {
      if(this.turned1 === undefined) {
          this.turned1 = card;
      }
      else {
          if(this.turned2 === undefined) {
              if(card.getPair() === this.turned1.getPair()) {
                  this.score++;
                  card.getPair().setFound();
                  this.turned1 = undefined;
              }
              else {
                  this.turned2 = card;
              }
          }
          else {
              this.turned1 = card;
              this.turned2 = undefined;
          }
      }
  }

  public getCards(): Card[] {
    return this.cards;
  }

  public getScore(): number {
    return this.score;
  }

  public getTurned1(): Card {
    return this.turned1;
  }

  public getTurned2(): Card {
    return this.turned2;
  }
}