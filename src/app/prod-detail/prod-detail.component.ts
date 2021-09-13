import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.component.html',
  styleUrls: ['./prod-detail.component.scss']
})
export class ProdDetailComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  qty: number[] = [1, 2, 3, 4, 5]
  s_color: string;
  size: string = 's'

  close() {
    this.dialog.closeAll()
  }

  chosedColor(color: string) {
    this.s_color = color
  }
  ngOnInit(): void {
  }

}
