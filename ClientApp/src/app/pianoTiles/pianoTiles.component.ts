import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { Key } from 'protractor';

@Component({
  selector: 'app-pianoTiles',
  templateUrl: './pianoTiles.component.html',
  styleUrls: ['./pianoTiles.component.css'],
  animations: [
    trigger("tileOne", [
      state(
        "from",
        style({
          top: '0px',
        })
      ),
      state(
        "to",
        style({
          top: '600px',
        })
      ),
      transition("from=>to", animate("1500ms")),
    ]),

    trigger("tileTwo", [
      state(
        "from",
        style({
          top: '-168px',
        })
      ),
      state(
        "to",
        style({
          top: '600px',
        })
      ),
      transition("from=>to", animate("1500ms")),
    ]),

    trigger("tileThree", [
      state(
        "from",
        style({
          top: '-168px',
        })
      ),
      state(
        "to",
        style({
          top: '600px',
        })
      ),
      transition("from=>to", animate("1500ms")),
    ]),

    trigger("tileFour", [
      state(
        "from",
        style({
          top: '-168px',
        })
      ),
      state(
        "to",
        style({
          top: '600px',
        })
      ),
      transition("from=>to", animate("1500ms")),
    ])

  ]
})

export class PianoTilesComponent implements OnInit {

  textBtn = () => isStart ? 'pause' : 'Start';

  filterOne = { column: columns.one };
  filterTwo = { column: columns.two };
  filterThree = { column: columns.three };
  filterFour = { column: columns.four };


  tiles: Array<Tile> = [new Tile(columns.three)];


  constructor() {

  }

  ngOnInit(): void {
    speed = 1;
  }

  start() {
    isStart = !isStart;

    this.tiles.push(new Tile(columns.three));

    if (isStart)
      this.tiles.forEach(tile => tile.start());
     else 
      this.tiles.forEach(tile => tile.stop());

  }
 


  //animationStarted($event) {
   
  //}

  //animationDone($event) {
 
  //}


  @HostListener('document:keypress', ['$event']) onkeypress(event: KeyboardEvent) {

    switch (event.keyCode) {

      case 102:
      
        break;

      case 103:

       
        break;

      case 107:
       
        break;

      case 108:
      
        break;

      default:
    }
  }


  //private getTargetTile(): Tile {
  //  let iter = ["one", "two", "three", "four"];
  //  let min: number = Number.MAX_VALUE;

  //  iter.forEach(i => {
  //    if (this.tiles[i].exist && this.tiles[i].key < min && this.tiles[i].key != 0)
  //      min = this.tiles[i].key;
  //  });

  //  if (min === Number.MAX_VALUE)
  //    return null;

  //  return this.tiles[iter[min - 1]];
  //}

}

const columns = {
  one: "one",
  two: "two",
  three: "three",
  four: "four",
}


function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
var id = 0;
var speed = 1;
var isStart = false;

class Tile {
  id :number;
  column: string = "";
  top: number = -168;
  static readonly maxtop: number = 600;
  public static speed = 1;
  private innerStart = false;
  
 
  constructor(column: string) {
    this.id = ++id;
    this.column = column;
    this.start();
  }

  stop() {
    this.innerStart = false;
  }

  async start() {
    if (this.innerStart)
      return;

    while (!this.isMax() && isStart ) {
      await delay(10);
      this.top += speed;
      this.innerStart = true;
    }
    stop();
  }
  private isMax = () =>
    this.top + speed >= Tile.maxtop;
}

