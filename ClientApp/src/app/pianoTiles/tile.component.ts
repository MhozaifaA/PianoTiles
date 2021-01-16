import { Component,  Input, Output, EventEmitter } from '@angular/core';
import { Tile } from '../util/Tile';
@Component({
  selector: 'app-tile',
  template: `
      <div (click)="HandelClick($event)" class="tile" [attr.tile] ="value.row" [style.top.px]="value.top" [style.transition-duration.ms]="speed" >

      </div>`,
})

export class TileComponent {

  @Input() public speed = 50;
  @Input() public value: Tile; //tile

  @Output('onTile') onClick = new EventEmitter<Tile>();

  HandelClick(event) {
    event.stopPropagation();
    this.onClick.emit(this.value);
  }
}
