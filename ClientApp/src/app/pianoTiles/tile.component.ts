import { Component,  Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-tile',
  template: `
      <div (click)="HandelClick($event)" class="tile" [attr.tile] ="value.row" [style.top.px]="value.top" [style.transition-duration.ms]="speed" >

      </div>`,
})

export class TileComponent {

  @Input() public speed = 50;
  @Input() public value:any ; //tile

  @Output('onTile') onClick = new EventEmitter<any>();

  HandelClick(event) {
    event.stopPropagation();
    this.onClick.emit(this.value);
  }
}
