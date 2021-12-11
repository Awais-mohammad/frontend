import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdsService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get('https://brixback.herokuapp.com/products')
  }

  getByCat(catname) {
    return this.http.get('https://brixback.herokuapp.com/products/bycat/' + catname)
  }

  search(prodname) {
    return this.http.get('https://brixback.herokuapp.com/products/' + prodname)
  }
}
