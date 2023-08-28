import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() closesidenav = new EventEmitter();

  constructor(){}

  onToggleclose(){
    this.closesidenav.emit();
  }

  ngOnInit() {
  }
}
