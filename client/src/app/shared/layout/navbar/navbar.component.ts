import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from '../../interfaces/session.interface';
import { SESSION } from '../../globals/localStorage.const';


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
    const sessionString = localStorage.getItem(SESSION);
    if (!!sessionString) {
      const session: Session = JSON.parse(sessionString);
      this.menuIcon = 'fa fa-bars';
      this.account = session.person.firstName + ' ' + session.person.lastName;
    }
  }


  logOut() {
    // location.reload();
    localStorage.clear();
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
