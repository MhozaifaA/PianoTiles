import { Component, OnInit, HostBinding, HostListener, ViewEncapsulation } from '@angular/core';
import { title } from 'process';
import { isUndefined } from 'util';


function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function random(min, max): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomColumn(): string {
  switch (random(1, 4)) {
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

  sound = true;

  flipSound = () => {
    this.sound = !this.sound;
    if (this.sound) {
      this.backgroundAudio.play();
    } else {
      this.backgroundAudio.pause();
    }
  };

  backgroundAudio = new Audio("../../../assets/sound/From Nothing To Everything.mp3");


  keyEnter = 13;
  keyF = 102;
  keyG = 103;
  keyK = 107;
  keyL = 108;
  readonly maxtop: number = 592;
  step = 10;
  isStart = false;
  textBtn = () => this.isStart ? 'Restart' : 'Start';
  readonly defaultSpeedDelay = 50;
  speedDelay: number;
  score: number = 0;
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
    this.backgroundAudio.load();
    this.backgroundAudio.loop = true;
  }

  //private isMax = () =>
  //  this.top + speed >= Tile.maxtop;
  async start() {
    this.isStart = !this.isStart;
    this.reset();

    while (this.isStart) {
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


    for (let i = 0; i < this.tiles.length; i++) {
      let tile = this.tiles[i];
      if ((tile.top + this.step) >= this.maxtop) {
        this.lost();
        break;
      } else {
        tile.top += this.step;
        if (tile.top > 0 && !tile.getCross()) {
          isGenerate = true;
          tile.setCross();
        }
      }

    }

    return isGenerate;
  }

  generate() {
    let isTwice = random(0, 10) >= 8 ? true : false;

    let tile = new Tile(randomColumn());
    this.tiles.push(tile);

    if (isTwice) {
      let spilcol = randomColumn();
      let sameId = tile.row;
      while (tile.column == spilcol) {
        spilcol = randomColumn();
      }
      tile = new Tile(spilcol);
      tile.row = sameId;
      this.tiles.push(tile);
    }


    if (tile.row % 5 == 0  ) {
      this.speedDelay--;
    }
    if (this.speedDelay < 15) {
      this.speedDelay = random(15,50);
    }
  }

  playAudio() {
    if (this.sound) {
      let audio = new Audio();
      audio.src = `../../../assets/sound/${random(1, 24)}.wav`;
      audio.load();
      audio.play();
    }
  }



  @HostListener('document:keypress', ['$event']) onkeypress(event: KeyboardEvent) {

    if (event.keyCode === this.keyEnter) {
      this.start();
      return;
    }


    this.keyPressed = event.key;
    if (!this.isStart || this.tiles.length === 0 || !this.isEnabelKeys(event.keyCode))
      return;


    this.playAudio();

    const first: Tile = this.tiles[0];
    const secound: Tile = this.tiles[1];

    if (isUndefined(secound)) {
      this.inRow(first, event.keyCode);
    } else {
      if (first.row === secound.row) {
        this.sameRow(first, secound, event.keyCode);
      } else {
        this.inRow(first, event.keyCode);
      }
    }


  }



  sameRow(first: Tile, secound: Tile, keycode: number) {

    if (keycode === this.getKeyCode(first.column)) {
      this.tiles.shift();
      this.score++;
    } else if (keycode === this.getKeyCode(secound.column)) {

      const index = this.tiles.indexOf(secound, 1);
      if (index > -1) {
        this.tiles.splice(index, 1);
      }
      this.score++;
    } else {
      this.lost(this.getColumn(keycode));
    }
  }

  inRow(first: Tile, keycode: number) {
    if (this.getKeyCode(first.column) === keycode) {
      this.tiles.shift();
      this.score++;

    } else {
      this.lost(this.getColumn(keycode));
    }
  }


  HandelMouseTile(tile: Tile) {

    if (!this.isStart)
      return;

    this.keyPressed = "mouse";

    this.playAudio();

    const first: Tile = this.tiles[0];
    const secound: Tile = this.tiles[1];



    if (isUndefined(secound)) {

      if (first.row === tile.row) {
        this.tiles.shift();
        this.score++;

      } else {
        this.lost(tile.column);
      }

    } else {

      if (first.row === secound.row) {

        if (first.column == tile.column) {
          this.tiles.shift();
          this.score++;

        } else {
          const index = this.tiles.indexOf(secound, 1);
          if (index > -1)
            this.tiles.splice(index, 1);
        }
        this.score++;


      } else {

        if (first.row === tile.row) {
          this.tiles.shift();
          this.score++;

        } else {
          this.lost(tile.column);
        }

      }

    }


  }


  handelBoardClick(col) {
    if (!this.isStart)
      return;

    this.lost(col);
  }

  lost(column = null) {
    this.isStart = false; // lost
    let col = this.tiles[0];
    // delete this.tiles[0];
    this.flipColumnColor(column === null ? col.column : column);
    this.backgroundAudio.pause();
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
    this.score = 0;
    this.speedDelay = this.defaultSpeedDelay;
    this.tiles = [];
    this.columnOneLost = this.defaultColumnBg;
    this.columnTwoLost = this.defaultColumnBg;
    this.columnThreeLost = this.defaultColumnBg;
    this.columnFourLost = this.defaultColumnBg;

    this.backgroundAudio.currentTime = 0;

    if (this.sound && this.isStart) {
      this.backgroundAudio.play();
    } else {
      this.backgroundAudio.pause();
    }


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
  row: number;
  column: string = "";
  top: number = -168;
  private isCross = false;
  constructor(column: string) {
    this.row = ++id;
    this.column = column;
  }
  setCross = () => this.isCross = true;
  getCross = () => this.isCross;
}

