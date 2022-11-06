import { Component, OnInit } from '@angular/core';
import { FfDialogService } from '../ffservices/ff-dialog.service';

@Component({
  selector: 'app-searchscreen',
  templateUrl: './searchscreen.component.html',
  styleUrls: ['./searchscreen.component.scss']
})
export class SearchscreenComponent implements OnInit {
  value = '';
  constructor(private popupService:FfDialogService) { }

  ngOnInit(): void {
  }


  back(){
    this.popupService.closeAllDialog();
  }
}
