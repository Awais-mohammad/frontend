import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  orderID: string;

  trackOrder() {
    if (!this.orderID) {
      alert('Unable to track the order with empty ID')
    }
    else {
      let order = {
        id: this.orderID
      }
      this.http.post('https://brixback.herokuapp.com', { order }).subscribe(res => {
        alert('resp' + res)
      })
    }
  }

  ngOnInit(): void {
  }



}
