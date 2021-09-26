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
    return this.http.get('http://localhost:3000/products')
  }

  getByCat(catname) {
    return this.http.get('http://localhost:3000/products/bycat/' + catname)
  }

  search(prodname) {
    return this.http.get('http://localhost:3000/products/' + prodname)
  }
}
