import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SearchscreenComponent } from '../searchscreen/searchscreen.component';

@Injectable({
  providedIn: 'root'
})
export class FfDialogService {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.closeAllDialog();
    const dialogRef = this.dialog.open(SearchscreenComponent, {
      width: '100%',
      height:'100%',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  closeAllDialog(){
    this.dialog?.closeAll();
  }

}
