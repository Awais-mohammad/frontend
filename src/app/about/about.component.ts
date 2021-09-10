import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private doc,
  ) { }

  ngOnInit(): void {



    var s14 = document.createElement("script");
    s14.type = "text/javascript";
    s14.src = "../assets/javascript/sliderconfig.js";
    this.elementRef.nativeElement.appendChild(s14);


  }
}
