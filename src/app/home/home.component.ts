import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProdsService } from './../prods.service';
import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ProdDetailComponent } from '../prod-detail/prod-detail.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private doc,
    private prodService: ProdsService,
    private dialog: MatDialog
  ) { }


  prods: any
  getProds() {
    this.prodService.getAll().subscribe((data: any[]) => {
      this.prods = data.slice(0, 10)
      console.log(this.prods);

    })


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
    const dialogRef = this.dialog.open(ProdDetailComponent, dialog);
  }

  ngOnInit(): void {

    this.getProds()

    var s14 = document.createElement("script");
    s14.type = "text/javascript";
    s14.src = "../assets/javascript/sliderconfig.js";
    this.elementRef.nativeElement.appendChild(s14);


  }





}
