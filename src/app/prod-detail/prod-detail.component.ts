
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
  ngOnInit(): void {
  }

}
