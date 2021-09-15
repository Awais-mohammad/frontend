import { ProdsService } from './../prods.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private prodservice: ProdsService
  ) {
    this.c_cat = 'Leather Jackets'
  }

  cats: string[] = ['Leather pants', 'Brixton Collection', 'Leather Jackets', 'Curves', 'Czechoslavakia Collection', 'Impreganation and Cleaning', 'Leather Vest', 'Leather Coats',
    'Keivar Shirts', 'Sweat Shirts', 'Tshirts', 'Sweat Shirts', 'Women Jackets', 'Mens Jackets', 'Leather Items'
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
  ngOnInit(): void {
    this.getProds(this.c_cat)
  }

}
