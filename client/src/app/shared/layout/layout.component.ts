import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  widthSidebar: string;
  session: string;

  constructor() { }

  ngOnInit() {
    this.widthSidebar = '50px';
    this.session = localStorage.getItem('session');
  }

  toggleSidebar(event) {
    if (event) {
      this.widthSidebar = '250px';
    } else {
      this.widthSidebar = '50px';
    }
  }

}
