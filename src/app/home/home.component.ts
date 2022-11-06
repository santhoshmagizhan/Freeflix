import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FfDialogService} from "../ffservices/ff-dialog.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  footermenu:any = {"home":"active","movies":"","series":"","search":""};
  @ViewChild('snav')
  snav!: any;
  isSearchOn = false;


  constructor(private popupService:FfDialogService) { }

  ngOnInit(): void {
  }

  search(){
    this.popupService.openDialog();
  }

 menuOnSelection(selecteditem:string,selectionfrom:string){
  this.footermenu.home = this.footermenu.movies = this.footermenu.series = this.footermenu.search = "";
  this.footermenu[selecteditem] = "active";
  this.snav.close();
  this.popupService.closeAllDialog();
 }

}
