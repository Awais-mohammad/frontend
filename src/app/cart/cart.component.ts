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
  ) { }

  close() {
    this.dialogue.closeAll()
  }
  ngOnInit(): void {
  }

}
