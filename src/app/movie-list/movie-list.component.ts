import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, {  Navigation,A11y,Virtual,Thumbs,Controller } from 'swiper';
SwiperCore.use([ Navigation,A11y,Virtual,Thumbs,Controller]);

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
 @Input() caption ="";
  constructor() { }

  ngOnInit(): void {
  }

}
