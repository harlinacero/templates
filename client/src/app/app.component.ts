import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'template';
  widthSidebar: string;
  session: string;

  ngOnInit(): void {
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

