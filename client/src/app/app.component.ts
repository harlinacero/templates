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
    this.addBackgroundImage(this.session);
  }


  toggleSidebar(event) {
    if (event) {
      this.widthSidebar = '250px';
    } else {
      this.widthSidebar = '50px';
    }
  }


  addBackgroundImage(session) {
    if (!(!!session)) {
      const a = document.getElementById('wrapper');
      a.style.backgroundImage = 'url("./assets/images/loginImage.jpg")';
      a.style.backgroundPosition = 'center';
      a.style.backgroundRepeat = 'no-repeat';
      a.style.backgroundSize = 'cover';
      a.style.height = '100vh';
    }
  }
}

