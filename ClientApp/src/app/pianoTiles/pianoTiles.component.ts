import { Component, OnInit, HostBinding, HostListener, ViewEncapsulation } from '@angular/core';
import { isUndefined } from 'util';
import { columns, getColumn, getKeyCode } from '../util/columns';
import { delay, randomColumn, randomNextInt } from '../util/help-methods';
import { Tile } from '../util/Tile';


@Component({
  selector: 'app-pianoTiles',
  templateUrl: './pianoTiles.component.html',
  styleUrls: ['./pianoTiles.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class PianoTilesComponent implements OnInit {

  backgroundAudio = new Audio("../../../PianoTiles/assets/sound/From Nothing To Everything.mp3");

  tiles: Array<Tile> = [];


  readonly maxtop: number = 592;
  readonly defaultSpeedDelay = 50;

  readonly keyEnter = 13;
  readonly keyF = 102;
  readonly keyG = 103;
  readonly keyK = 107;
  readonly keyL = 108;

  isStart = false;
  sound = true;

  step = 10;
  speedDelay: number;
  decrementDelay= 1;
  tileDelay=5;
  score= 0;
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


  constructor() {

  }

  ngOnInit(): void {
    this.backgroundAudio.load();
    this.backgroundAudio.loop = true;
  }
 
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
    let isTwice = randomNextInt(0, 10) >= 8 ? true : false;

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

    if (tile.row % this.tileDelay == 0  ) {
      this.speedDelay -= this.decrementDelay;
    }
    if (this.speedDelay < 15) {
      this.speedDelay = randomNextInt(15,50);
      this.decrementDelay = randomNextInt(1, 4);
      this.tileDelay = randomNextInt(5, 20);
    }
  }

  sameRow(first: Tile, secound: Tile, keycode: number) {

    if (keycode === getKeyCode(first.column)) {
      this.tiles.shift();
      this.score++;
    } else if (keycode === getKeyCode(secound.column)) {

      const index = this.tiles.indexOf(secound, 1);
      if (index > -1) {
        this.tiles.splice(index, 1);
      }
      this.score++;
    } else {
      this.lost(getColumn(keycode));
    }
  }

  inRow(first: Tile, keycode: number) {
    if (getKeyCode(first.column) === keycode) {
      this.tiles.shift();
      this.score++;

    } else {
      this.lost(getColumn(keycode));
    }
  }

  lost(column = null) {
    this.isStart = false; // lost
    let col = this.tiles[0];
    // delete this.tiles[0];
    this.flipColumnColor(column === null ? col.column : column);
    this.backgroundAudio.pause();
    console.log("lost");
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

  textBtn = () => this.isStart ? 'Restart' : 'Start';
  flipSound = () => {
    this.sound = !this.sound;
    if (this.sound) {
      this.backgroundAudio.play();
    } else {
      this.backgroundAudio.pause();
    }
  };
  playAudio() {
    if (this.sound) {
      let audio = new Audio();
      audio.src = `../../../PianoTiles/assets/sound/${randomNextInt(1, 24)}.wav`;
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

  handelMouseTile(tile: Tile) {

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


  reset() {
    Tile.rest_id();
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





