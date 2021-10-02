import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recoverpas',
  templateUrl: './recoverpas.component.html',
  styleUrls: ['./recoverpas.component.scss']
})
export class RecoverpasComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private http: HttpClient,

  ) {
    this.view = 'one'
  }

  email: string;
  view: string;
  otp: any;

  close() {
    this.dialog.closeAll()
  }
  rand: any;
  genrand() {
    this.rand = Math.floor(Math.random() * 90000) + 10000;
    localStorage.setItem('rand', JSON.stringify(this.rand))
  }

  valemail() {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    re.test(this.email)
    if (!this.email) {
      alert('add an email')
    }

    else if (!re.test(this.email)) {
      alert('invalid email format')
    }
    else {
      this.genrand()
      let data = {
        email: this.email.toLocaleLowerCase(),
        code: this.rand
      }
      this.http.post('http://localhost:3000/users/recoverpass', data, { responseType: 'text' }).subscribe(resp => {
        alert(resp)
        this.toggle('two')
      })
    }
  }

  valotp() {
    const oldotp = JSON.parse(localStorage.getItem('rand'))
    if (oldotp == this.otp) {
      this.toggle('three')
    }
    else {
      alert('wrong otp')
    }
  }

  toggle(v) {
    this.view = v
  }

  ngOnInit(): void {
  }

}
