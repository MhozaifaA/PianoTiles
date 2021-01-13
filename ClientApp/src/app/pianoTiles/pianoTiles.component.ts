import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-pianoTiles',
  templateUrl: './pianoTiles.component.html',
  styleUrls: ['./pianoTiles.component.css'],
  animations: [
    trigger("tileOne", [
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
  isGo: boolean = false;
  
  tiles = {
    one: new Tile("one", 0, true, states.from),
    two: new Tile("two", 0, true, states.from),
    three: new Tile("three", 0, true, states.from),
    four: new Tile("four", 0, true, states.from)
  };

  constructor() {

  }

  ngOnInit(): void {
    // console.log("f");
  }



  start() {
    this.isGo = !this.isGo;
    this.tiles.one.start();
  }

  animationStarted($event) {
    // console.log($event.element.getAttribute('tile'));
  }

  animationDone($event) {
    //console.log($event.element.getAttribute('tile'));//
    //if ($event.element.getAttribute('tile') == 4) {
    //  this.start();
    //}
  }


  @HostListener('document:keypress', ['$event']) onkeypress(event: KeyboardEvent) {

    let target: Tile = this.getTargetTile();

    if (target === null)
      return;

    switch (event.keyCode) {

      case 102:
        if (target.column === "one")
          target.exist = false;
        else
          console.log("dead");
        break;

      case 103:

        if (target.column === "two")
          target.exist = false;
        else
          console.log("dead");
        break;

      case 107:
        if (target.column === "three")
          target.exist = false;
        else
          console.log("dead");
        break;

      case 108:
        if (target.column === "four")
          target.exist = false;
        else
          console.log("dead");
        break;

      default:
    }
  }


  private getTargetTile(): Tile {
    let iter = ["one", "two", "three", "four"];
    let min: number = Number.MAX_VALUE;

    iter.forEach(i => {
      if (this.tiles[i].exist && this.tiles[i].key < min && this.tiles[i].key != 0)
        min = this.tiles[i].key;
    });

    if (min === Number.MAX_VALUE)
      return null;

    return this.tiles[iter[min - 1]];
  }

}


const states= {
  from:"from",
  to:"to",
}
class Tile {
  key: number = 0;
  exist: boolean = false;
  column: string = "";
  state: string;
  constructor(column: string, key: number, exist: boolean, state: string) {
    this.column = column;
    this.key = key;
    this.exist = exist;
    this.state = state;
  }

  start() {
    this.state = states.to;
  }
}
