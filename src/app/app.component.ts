import { CheckoutComponent } from './checkout/checkout.component';
import { AuthComponent } from './auth/auth.component';
import { Component, HostListener } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpResponse, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private router: Router,
    private dialogRef: MatDialogRef<AuthComponent>

  ) {
    // setTimeout(() => {
    //   setInterval(() => {
    //     if (window.innerWidth > 1200) {
    //       this.desktop = true;
    //       this.scrollNav();
    //     } else {
    //       this.desktop = false;
    //       if (window.scrollY >= 150) {
    //         let nav = document.getElementById("navMob");
    //         nav.style.animation = "navShort2 0.3s linear";
    //         nav.style.paddingTop = "10px";
    //         nav.style.paddingBottom = "10px";
    //         nav.style.background = "rgba(255, 255, 255)";
    //         nav.style.boxShadow = "0px 0px 5px 1px rgba(0, 0, 0, 0.438)";
    //       } else if (window.scrollY < 150) {
    //         let nav = document.getElementById("navMob");
    //         nav.style.animation = "navBig2 0.3s linear";
    //         nav.style.paddingTop = "30px";
    //         nav.style.paddingBottom = "30px";
    //         nav.style.background = "rgba(255, 255, 255,0)";
    //         nav.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0.438)";
    //       }
    //     }
    //   }, 100)
    // }, 1000);
    // setInterval(() => {
    //   this.route = window.location.pathname;
    //   if (this.prevRoute != this.route) {
    //     setTimeout(() => {
    //     }, 500);
    //   }
    //   this.prevRoute = this.route;
    // }, 10)
  }

  goToPage(page: string) {
    this.router.navigate([page]);
    let mylinks = document.getElementById("myLinks");
    mylinks.style.display = "none";
  }

  desktop: boolean;

  route: any;

  openDialogue(dTyp: string) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '610px';
    dialogConfig.width = '800px';

    const dialogRef = this.dialog.open(AuthComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result.data);

      if (result.data == 'signup') {
        let configs = this.openSignup()
        const dialogRef = this.dialog.open(AuthComponent, configs);
      }
    })

  }

  openSignup() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '700px';
    dialogConfig.width = '800px';

    return dialogConfig;

  }

  opncheckOut() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '610px';
    dialogConfig.width = '800px';

    const dialogRef = this.dialog.open(CheckoutComponent, dialogConfig);
  }

  ngOnInit(): void {
    // this.opncheckOut()
    // this.openDialogue('dTyp')

  }
}