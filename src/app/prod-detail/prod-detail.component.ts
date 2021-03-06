
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { ViewImageComponent } from '../view-image/view-image.component';

@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.component.html',
  styleUrls: ['./prod-detail.component.scss']
})
export class ProdDetailComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<ProdDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {


    this.prodData = data.prod
    this.size = 's'
    this.s_color = 'default'
    this.bigImage = data.prod.bannerImageURL
    this.bannerImage = data.prod.bannerImageURL

  }
  bigImage: string;
  prodData: any;
  qty: number[] = [1, 2, 3, 4, 5]
  s_color: string;
  size: string

  close() {
    this.dialog.closeAll()
  }

  choosesize(s) {
    this.size = s
  }
  chosedColor(color: string) {
    this.s_color = color
  }

  temparray: any[] = [];
  existingarray: any[] = []
  quantity: number;

  onquantity(param) {
    this.quantity = param.value
  }
  check() {

    if (!this.prodData.name || !this.prodData._id || !this.size || !this.s_color || !this.prodData.price || !this.quantity) {
      alert('bhaiyoo or behnooo order thek sy place kryn mehrbani!!')



    }

    else {
      var res = this.prodData.price / 100 * 25;

      let prod = {
        name: this.prodData.name,
        ID: this.prodData._id,
        size: this.size,
        color: this.s_color,
        price: this.prodData.price + res,
        quantity: this.quantity,
        image: this.prodData.bannerImageURL
      }

      console.log(prod);
      this.addToCart(prod)
    }

  }

  addToCart(prodID) {

    console.log(prodID);

    this.existingarray = JSON.parse(localStorage.getItem('cart'))

    if (!this.existingarray) {
      this.temparray.push(prodID)
      localStorage.setItem('cart', JSON.stringify(this.temparray))

    }
    else {
      this.temparray.push(prodID)


      for (var i = 0; i < this.existingarray.length; i++) {
        console.log(this.existingarray[i]);
        this.temparray.push(this.existingarray[i])

      }


      localStorage.setItem('cart', JSON.stringify(this.temparray))


    }

    this.close()
    location.reload()
  }
  bannerImage: string;

  makeBig(img) {

    this.bigImage = img
  }


  viewImageOnFullPage(url: any) {
    console.log(url);
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.autoFocus = true;
    dialog.height = '600px';
    dialog.width = '800px';
    dialog.data = {
      prod: url,
    };
    const dialogRef = this.dialog.open(ViewImageComponent, dialog);
  }


  ngOnInit(): void {
  }

}
