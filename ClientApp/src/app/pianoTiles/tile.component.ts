import { Component,  Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-tile',
  template: `
      <div (click)="HandelClick()" class="tile" [attr.tile] ="value.id" [style.top.px]="value.top" [style.transition-duration.ms]="speed" >
      {{value.id}}
      </div>`,
})

export class TileComponent {

  @Input() public speed = 50;
  @Input() public value:any ; //tile

  @Output('onTile') onClick = new EventEmitter<any>();

  HandelClick() {
    this.onClick.emit(this.value);
  }
}
