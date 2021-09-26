import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
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

  constructor(
    private _formBuilder: FormBuilder,
    private dialoge: MatDialog,
    private fb: FormBuilder, private stripeService: StripeService,
    private http: HttpClient,
  ) { }

  @ViewChild(StripeCardComponent) card: StripeCardComponent;

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
          console.log(token);
          this.http.post('http://localhost:3000/auth/payment', { token: token, amount: amount, description: 'checking!!' }, { responseType: 'text' }).subscribe((resp: any) => {




          })
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }

  close() {
    this.dialoge.closeAll()
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
