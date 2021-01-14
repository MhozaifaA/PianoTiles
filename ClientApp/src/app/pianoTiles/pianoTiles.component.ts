import { Component, OnInit, HostBinding, HostListener, ViewEncapsulation } from '@angular/core';


function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function randomColumn(min = 1, max = 4): string {
  switch (Math.floor(Math.random() * (max - min + 1) + min)) {
    case 1:
      return columns.one;
    case 2:
      return columns.two;
    case 3:
      return columns.three;
    case 4:
      return columns.four;
    default: return "";
  }
}

@Component({
  selector: 'app-pianoTiles',
  templateUrl: './pianoTiles.component.html',
  styleUrls: ['./pianoTiles.component.css'],
  encapsulation: ViewEncapsulation.None  
})

export class PianoTilesComponent implements OnInit {

  keyF = 102;
  keyG = 103;
  keyK = 107;
  keyL = 108;
  readonly maxtop: number = 592;
  step = 10;
  isStart = false;
  textBtn = () => this.isStart ? 'Restart' : 'Start';
  speedDelay = 50;

  keyPressed: string;


  defaultColumnBg = "lightblue";
  lostColumnBg = "palevioletred";
  columnOneLost: string;
  columnTwoLost: string;
  columnThreeLost: string;
  columnFourLost: string;


  filterOne = { column: columns.one };
  filterTwo = { column: columns.two };
  filterThree = { column: columns.three };
  filterFour = { column: columns.four };


  tiles: Array<Tile> = [];


  constructor() {

  }

  ngOnInit(): void {

  }

  //private isMax = () =>
  //  this.top + speed >= Tile.maxtop;
  async start() {
    this.isStart = !this.isStart;
    this.reset();

    while (this.isStart)
    {
      await delay(this.speedDelay);
      let isGenerate = this.move();
      if (isGenerate)
        this.generate();
    }

  }


  move(): boolean {
    let isGenerate = false;

    if (this.tiles.length === 0) {
      isGenerate = true;
    }

    this.tiles.forEach((tile) => {
      if ((tile.top + this.step) >= this.maxtop) {
        this.lost();
      } else {
        tile.top += this.step;
        if (tile.top > 0 && !tile.getCross()) {
          isGenerate = true;
          tile.setCross();
        }
      }
    });
   
    return isGenerate;
  }

  generate() {
    let tile = new Tile(randomColumn());
    this.tiles.push(tile);
    if (tile.id%5==0) {
      this.speedDelay--;
    }
  }


  @HostListener('document:keypress', ['$event']) onkeypress(event: KeyboardEvent) {

    this.keyPressed = event.key;
    if (!this.isStart || this.tiles.length === 0 || !this.isEnabelKeys(event.keyCode))
      return;

    const first: Tile = this.tiles[0];

    if (this.getKeyCode(first.column) === event.keyCode) {
       this.tiles.shift();
    } else {
      this.lost(this.getColumn(event.keyCode));
    }
 
  }

  lost(column=null) {
    this.isStart = false; // lost
    let col =this.tiles[0];
    // delete this.tiles[0];
    this.flipColumnColor(column == null ? col.column : column);

    console.log("lost");
  }

  getKeyCode = (column): number => {
    switch (column) {
      case columns.one:
        return this.keyF;
      case columns.two:
        return this.keyG;
      case columns.three:
        return this.keyK;
      case columns.four:
        return this.keyL;
    }
  }

  getColumn = (keycode): string => {
    switch (keycode) {
      case this.keyF:
        return columns.one;
      case this.keyG:
        return columns.two;
      case this.keyK:
        return columns.three;
      case this.keyL:
        return columns.four;
    }
  }

  isEnabelKeys(keycode) {
    let list = [this.keyF, this.keyG, this.keyK, this.keyL]
    return list.includes(keycode);
  }

  flipColumnColor(column) {
    switch (column) {
      case columns.one:
        this.columnOneLost = this.lostColumnBg;
        break;
      case columns.two:
        this.columnTwoLost = this.lostColumnBg;
        break;
      case columns.three:
        this.columnThreeLost = this.lostColumnBg;
        break;
      case columns.four:
        this.columnFourLost = this.lostColumnBg;
        break;
    }
  }

  reset() {
    id = 0;
    this.speedDelay = 50;
    this.tiles = [];
    this.columnOneLost = this.defaultColumnBg;
    this.columnTwoLost= this.defaultColumnBg;
    this.columnThreeLost= this.defaultColumnBg;
    this.columnFourLost= this.defaultColumnBg;
  }

}

const columns = {
  one: "one",
  two: "two",
  three: "three",
  four: "four",
}


var id = 0;

class Tile {
  id: number;
  column: string = "";
  top: number = -168;
  private isCross  = false;
  constructor(column: string) {
    this.id = ++id;
    this.column = column;
  }
  setCross = () => this.isCross = true;
  getCross = () => this.isCross;
}

