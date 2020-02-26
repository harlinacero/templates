import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ISession } from '../../interfaces/session.interface';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() emitExpandSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  isExpandSidebar: boolean;
  menuIcon: string;
  account: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isExpandSidebar = false;
    const sessionString = localStorage.getItem('session');
    if (!!sessionString) {
      const session: ISession = JSON.parse(sessionString);
      this.menuIcon = 'fa fa-bars';
      this.account = session.userName;
    }
  }


  logOut() {
    localStorage.clear();
    location.reload();
    this.router.navigate(['/login']);
  }

  toggleSidebar() {
    this.isExpandSidebar = !this.isExpandSidebar;
    this.toggleIconMenu(this.isExpandSidebar);
    this.emitExpandSidebar.emit(this.isExpandSidebar);
  }

  toggleIconMenu(isExapand: boolean) {
    if (isExapand) {
      this.menuIcon = 'fa fa-times';
    } else {
      this.menuIcon = 'fa fa-bars';
    }
  }

}
