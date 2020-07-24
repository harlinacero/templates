import { Component, OnInit, Input } from '@angular/core';
import { Session } from '../../interfaces/session.interface';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  @Input() widthSidebar: string;
  background: '#7386D5';
  version: any;
  menuItems: any[] = [
  ];

  constructor() {
    const session: Session = JSON.parse(localStorage.getItem('session'));
    if (!!session) {
      this.menuItems = session.menus;
    }
    this.version = environment.appVersion;
  }

  ngOnInit() {
  }

  getBackground(widthSidebar) {
    if (widthSidebar === '250px') {
      this.version = environment.appVersion;
      return '#fff';
    } else {
      this.version = '';
      return 'rgb(52, 133, 133)';
    }
  }




}
