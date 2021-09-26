import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    private dialogue: MatDialog
  ) {
    this.total = 0

  }

  close() {
    this.dialogue.closeAll()
  }

  items: any[] = []
  total: number;
  getItems() {

    this.items = JSON.parse(localStorage.getItem('cart'))
    console.log(this.items);
    if (this.items != null) {

      for (var i = 0; i < this.items.length; i++) {

        this.total = this.items[i].price + this.total
        console.log(this.total, 'total bill');


      }
    }

  }

  delete(param) {
    console.log(param);

    this.items.splice(param, 1)
    console.log(this.items);
    localStorage.setItem('cart', JSON.stringify(this.items))
    this.items = JSON.parse(localStorage.getItem('cart'))

  }

  ngOnInit(): void {
    this.getItems()
  }

}
