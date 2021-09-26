import { HttpClient } from '@angular/common/http';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @ViewChild(StripeCardComponent) card: StripeCardComponent;

  constructor(
    private _formBuilder: FormBuilder,
    private dialoge: MatDialog,
    private fb: FormBuilder, private stripeService: StripeService,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {
    this.spin = false;

  }
  //variables//
  name: string;
  email: string;
  phone: string;
  gender: string;
  zip: string;
  adressOne: string;
  adressTwo: string;
  token: string;
  spin: boolean;

  validate() {

    this.spin = true
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!this.name) {
      alert('name empty')
      this.spin = false;
    }
    else if (!this.email) {
      this.spin = false;
      alert('email empty')
    }
    else if (!this.phone) {
      this.spin = false;
      alert('phine empty')
    }

    else if (!this.zip) {
      this.spin = false;
      alert('zip empty')
    }
    else if (!this.adressOne) {
      this.spin = false;
      alert('ad1 empty')
    }
    else if (!this.adressTwo) {
      this.spin = false;
      alert('ad2 empty')
    }

    else if (re.test(this.email) != true) {
      this.spin = false;

      alert('wrong email format')
    }
    else if (!this.data.open) {
      this.spin = false;
      alert('product not specified')

    }
    else {

      this.spin = false;

    }

  }



  cardOptions: StripeCardElementOptions = {
    style: {

      base: {
        fontWeight: 500,
        padding: '5px',
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '18px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': { color: '#01010aaf' },
        '::placeholder': { color: '#01010aaf' }
      },
      invalid: {
        iconColor: '#ffc7ee',
        color: '#ffc7ee'
      }
    }
  };

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  elementsOptions: StripeElementsOptions = {
    locale: 'en'
  };

  stripeTest: FormGroup;



  createToken(): void {
    const amount = '2000'
    this.stripeService
      .createToken(this.card.element)
      .subscribe((result) => {
        if (result.token) {
          // Use the token


          // 
          const token = result.token.id
          this.token = token
          console.log(token);
          this.http.post('http://localhost:3000/auth/payment', { token: token, amount: amount, description: 'checking!!' }, { responseType: 'text' }).subscribe((resp: any) => {

            this.addOrder()


          })
        } else if (result.error) {
          // Error creating the token
          this.spin = false;
          console.log(result.error.message);
        }


      });
  }

  close() {
    this.dialoge.closeAll()
  }

  addOrder() {
    let order = {
      name: this.name,
      phone: this.phone,
      gender: this.gender,
      products: [
        this.data.open
      ],
      adress: this.adressOne + this.adressTwo,
      zip: this.zip,
      email: this.email,
      token: this.token,
      timestamp: new Date()
    }

    this.http.post('http://localhost:3000/checkout', order, { responseType: 'json' }).subscribe(resp => {
      console.log(resp);
      this.spin = false;
      this.close()
      alert('order placed successfully!!!!')
    }), (err) => {
      if (err) {
        alert(err.message)
      }
    }
  }

  ngOnInit(): void {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
    //  const stripe = Stripe('');

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }




}
