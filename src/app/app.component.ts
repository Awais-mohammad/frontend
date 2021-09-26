import { ProdsService } from './prods.service';
import { FavComponent } from './fav/fav.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthComponent } from './auth/auth.component';
import { Component, HostListener } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpResponse, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { Router } from '@angular/router';
import { ProdDetailComponent } from './prod-detail/prod-detail.component';

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
    public router: Router,
    private dialogRef: MatDialogRef<AuthComponent>,


  ) {

  }



  loggedIn: boolean;

  goToPage(page: string) {
    this.router.navigate([page]);
    let mylinks = document.getElementById("myLinks");
    mylinks.style.display = "none";
  }

  desktop: boolean;

  route: any;

  openLogin(dTyp: string) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '640px';
    dialogConfig.width = '800px';
    dialogConfig.data = {
      open: dTyp,
    };
    const dialogRef = this.dialog.open(AuthComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result.data);
      if (result.data) {

        if (result.data == 'signup') {
          this.openSignup('signup')
        }
        else if (result.data == 'login') {
          this.openLogin('login')
        }
      }
    })

  }

  openSignup(dTyp) {


    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '690px';
    dialogConfig.width = '800px';
    dialogConfig.data = {
      open: dTyp,
    };
    const dialogRef = this.dialog.open(AuthComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result.data);
      if (result.data) {
        if (result.data == 'signup') {
          this.openSignup('signup')
        }
        else if (result.data == 'login') {
          this.openLogin('login')
        }
      }

    })

  }

 

  openCart() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '700x';
    dialogConfig.width = '800px';

    const dialogRef = this.dialog.open(CartComponent, dialogConfig);
  }

  viewFav() {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.autoFocus = true;
    dialog.height = '700x';
    dialog.width = '800px';

    const dialogRef = this.dialog.open(FavComponent, dialog);
  }



  logout() {
    localStorage.removeItem('jwt')
    location.reload()

  }

  cart: any[] = []
  fav: any[] = []

  ngOnInit(): void {


   
    //   this.openLogin('login')

    // this.openCart()
    // this.viewdetail()

    const jwt = localStorage.getItem('jwt')

    if (!jwt) {
      console.log('user not logged in!!');
      this.loggedIn = false;
    }
    else {
      console.log('user is logged in!!!');
      this.loggedIn = true
    }

    this.cart = JSON.parse(localStorage.getItem('cart'))

    this.fav = JSON.parse(localStorage.getItem('fav'))
  }




}