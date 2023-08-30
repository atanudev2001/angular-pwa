import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() closesidenav = new EventEmitter();

  onToggleclose(){
    this.closesidenav.emit();
  }

  ngOnInit(): void {
  }

}
