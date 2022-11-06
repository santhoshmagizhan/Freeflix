import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, {  Navigation,Pagination,Scrollbar,A11y,Virtual,Zoom,Autoplay,Thumbs,Controller } from 'swiper';
SwiperCore.use([ Navigation,Pagination,Scrollbar,A11y,Virtual,Zoom,Autoplay,Thumbs,Controller]);



@Component({
  selector: 'app-all-list',
  templateUrl: './all-list.component.html',
  styleUrls: ['./all-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AllListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
