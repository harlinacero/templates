import { Component, OnInit, Input } from '@angular/core';
import { Session } from '../../interfaces/session.interface';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  @Input() widthSidebar: string;
  background: '#7386D5';

  menuItems: any[] = [
    // { icon: 'fa fa-home', name: 'Inicio', component: '/home' },
    // { icon: 'fa fa-file-text-o', name: 'Gestión de Facturas', component: '/billing' },
    // { icon: 'fa fa-shopping-cart', name: 'Órdenes de Compra', component: '/shopping' },
    // { icon: 'fa fa-users', name: 'Administración', component: '/admin' },
    // { icon: 'fa fa-line-chart', name: 'Informes', component: '/reports' },
    // { icon: 'fa fa-cog', name: 'Configuración', component: '/settings' }
  ];

  constructor() {
    const session: Session = JSON.parse(localStorage.getItem('session'));
    if (!!session) {
      this.menuItems = session.menus;
    }



  }

  ngOnInit() {
  }

  getBackground(widthSidebar) {
    if (widthSidebar === '250px') {
      return '#fff';
    } else {
      return 'rgb(51, 51, 51)';
    }
  }




}
