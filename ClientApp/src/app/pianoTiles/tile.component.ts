import { Component, OnInit, HostBinding, HostListener, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-tile',
  template: `
      <div class="tile" [attr.tile] ="id" [style.top.px]="top" [style.transition-duration.ms]="speed" >
        {{id}}
      </div>`,
})

export class TileComponent {

  @Input() public id = 0;
  @Input() public top = -168;
  @Input() public speed = 50;


 // @Output() onSignup = new EventEmitter<any>();  
}
