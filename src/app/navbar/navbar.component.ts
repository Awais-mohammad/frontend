import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {
    this.width = window.innerWidth


  }

  width: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = window.innerWidth;
  
  }

  ngOnInit(): void {
  }

}
