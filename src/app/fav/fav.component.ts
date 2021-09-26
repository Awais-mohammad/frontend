import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProdDetailComponent } from '../prod-detail/prod-detail.component';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.scss']
})
export class FavComponent implements OnInit {

  constructor(
    private dialogue: MatDialog
  ) { }


  close() {
    this.dialogue.closeAll()
  }

  items: any[] = []
  total: number;
  getItems() {

    this.items = JSON.parse(localStorage.getItem('fav'))
    console.log(this.items);


  }

  delete(param) {
    console.log(param);

    this.items.splice(param, 1)
    console.log(this.items);
    localStorage.setItem('fav', JSON.stringify(this.items))
    this.items = JSON.parse(localStorage.getItem('fav'))

  }

  viewProd(prod: any) {
    console.log(prod);
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.autoFocus = true;
    dialog.height = '700px';
    dialog.width = '920px';
    dialog.data = {
      prod: prod,
    };
    const dialogRef = this.dialogue.open(ProdDetailComponent, dialog);
  }

  ngOnInit(): void {

    this.getItems()
  }

}
