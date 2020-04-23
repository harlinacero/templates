import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TitleComponent } from './title/title.component';
import { LayoutComponent } from './layout.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidemenuComponent,
    TitleComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutComponent,
    NavbarComponent,
    SidemenuComponent,
    TitleComponent
  ]
})
export class LayoutModule { }
