import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {

  @Output() SideNavToggle = new EventEmitter();


  opensidenav(){
    this.SideNavToggle.emit();
  }
}
