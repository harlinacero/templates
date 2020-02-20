import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidemenuComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SidemenuComponent,
    TitleComponent
  ]
})
export class LayoutModule { }
