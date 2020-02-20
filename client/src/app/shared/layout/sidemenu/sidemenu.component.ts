import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  @Input() widthSidebar: string;


  menuItems: any[] = [
    { icon: 'fa fa-home', name: 'Inicio', component: '/home' },
    { icon: 'fa fa-file-text-o', name: 'Gestión de Facturas', component: '/billing' },
    { icon: 'fa fa-shopping-cart', name: 'Órdenes de Compra', component: '/shopping' },
    { icon: 'fa fa-users', name: 'Administración', component: '/admin' },
    { icon: 'fa fa-line-chart', name: 'Informes', component: '/reports' },
    { icon: 'fa fa-cog', name: 'Configuración', component: '/settings' }
  ];

  constructor() { }

  ngOnInit() {
  }



}
