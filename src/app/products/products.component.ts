import { ProdsService } from './../prods.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProdDetailComponent } from '../prod-detail/prod-detail.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private prodservice: ProdsService,
    private dialog: MatDialog,
    private router: Router,
  ) {
    this.c_cat = 'Leather Jackets'

    if (this.router.getCurrentNavigation().extras.state) {
      console.log(' this.c_cat = this.router.getCurrentNavigation().extras.state.example', this.router.getCurrentNavigation().extras.state.example);
      this.c_cat = this.router.getCurrentNavigation().extras.state.example
    }


    this.getProds(this.c_cat)

  }

  cats: string[] = ['Leather pants', 'Brixton Collection', 'Leather Jackets', 'Czechoslavakia Collection', 'Leather Vest', 'Keivar Shirts', 'Women Jackets', 'Leather Items'
  ]
  prods: any;
  c_cat: string

  changeCat(cname) {
    this.c_cat = cname
    this.getProds(cname)
  }

  getProds(cat) {
    this.prodservice.getByCat(cat).subscribe(data => {
      console.log(data);
      this.prods = data
      if (this.prods.length < 1) {
        this.prods = undefined
      }
    })

  }

  temparray: any[] = [];
  existingarray: any[] = []

  dummyCart(prod) {
    alert('Product quantity,size and color not specified please specify them to continue!!')
    this.viewProd(prod)
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

  viewbrix() {
    this.c_cat = 'Brixton Collection'
  }

  addtofav(prodID) {

    console.log(prodID);

    this.existingarray = JSON.parse(localStorage.getItem('fav'))

    if (!this.existingarray) {

      this.temparray.push(prodID)
      localStorage.setItem('fav', JSON.stringify(this.temparray))


    }
    else {
      this.temparray.push(prodID)
      for (var i = 0; i < this.existingarray.length; i++) {
        console.log(this.existingarray[i]);
        this.temparray.push(this.existingarray[i])

      }

      localStorage.setItem('fav', JSON.stringify(this.temparray))


    }
    location.reload()

  }


  ngOnInit(): void {
  }

}
