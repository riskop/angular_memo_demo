import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
import { Desk } from './desk';
import { Card } from './card';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  animations: [
    trigger('found', [
      state('false', style({
        opacity: 1
      })),
      state('true', style({
        opacity: 0
      })),
      transition('false => true', [
        animate(
          '2000ms'/*,
          keyframes([
            style({backgroundColor: 'red'}),
            style({backgroundColor: 'blue'}),
            style({backgroundColor: 'yellow'}),
            style({backgroundColor: 'green', opacity: 0})
          ]) */
        )
      ]),
    ]),
  ],
  styleUrls: [ './app.component.css' ]
})

export class AppComponent implements OnInit {
  desk: Desk;

  ngOnInit() {
    this.desk = new Desk();
  }

  public newDesk() {
    this.desk = new Desk();
  }

}
