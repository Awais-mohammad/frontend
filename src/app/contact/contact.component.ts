import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  okey() {
    alert('Thankyou for contacting We will reach back as soon as possible')
  }

  ngOnInit(): void {
  }

}
