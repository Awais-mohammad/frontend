
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

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
  }

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
      let prod = {
        name: this.prodData.name,
        ID: this.prodData._id,
        size: this.size,
        color: this.s_color,
        price: this.prodData.price,
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
  }

  ngOnInit(): void {
  }

}
