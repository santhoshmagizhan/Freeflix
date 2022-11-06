import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SwiperModule } from "swiper/angular";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,SwiperModule,
    MatSidenavModule,
    MatListModule,MatDialogModule
  ],
  exports:[
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,SwiperModule,
    MatSidenavModule,
    MatListModule,MatDialogModule
  ]
})
export class FfngBootstrapModule { }
