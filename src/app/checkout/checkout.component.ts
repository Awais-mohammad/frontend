import { HttpClient } from '@angular/common/http';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';
import {
  IPayPalConfig,
  ICreateOrderRequest
} from 'ngx-paypal';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @ViewChild(StripeCardComponent) card: StripeCardComponent;
  public payPalConfig?: IPayPalConfig;


  constructor(
    private _formBuilder: FormBuilder,
    private dialoge: MatDialog,
    private fb: FormBuilder,
    private stripeService: StripeService,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {
    this.spin = false;
    this.gender = 'Male'
    if (this.data.open) {
      for (var i = 0; i < this.data.open.length; i++) {
        console.log(this.data.open[i].price);
        this.payment = this.data.open[i].price + this.payment

      }
    }

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
  payment: number = 0;

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
    hidePostalCode: true,
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
    const descp = 'On -->' + new Date() + '--> order was placed by' + this.name
    this.stripeService.createToken(this.card.element)
      .subscribe((result) => {
        if (result.token) {
          // Use the token


          // 
          const token = result.token.id
          this.token = token
          console.log(token);
          this.http.post('https://brixback.herokuapp.com/auth/payment', { token: token, amount: this.payment, description: descp }, { responseType: 'text' }).subscribe((resp: any) => {

            this.addOrder()

          })
        } else if (result.error) {
          // Error creating the token
          this.spin = false;
          alert(result.error.message);
        }


      });
  }

  close() {
    this.dialoge.closeAll()
  }
  temp: any;

  addOrder() {
    if (!this.token) {
      this.temp = this.detail
    }
    else {
      this.temp = this.token
    }
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

      token: this.temp,
      timestamp: new Date()
    }

    this.http.post('https://brixback.herokuapp.com/checkout', order, { responseType: 'json' }).subscribe(resp => {
      console.log(resp);
      this.spin = false;
      this.close()
      alert('order placed successfully!!!!')

      const mail = localStorage.getItem('email')
      if (mail) {

        let data = {
          name: this.name,
          phone: this.phone,
          adress: this.adressOne + '-' + this.adressTwo,
          zip: this.zip,
          gender: this.gender,


        }

        this.http.put('https://brixback.herokuapp.com/users/' + mail, data).subscribe(resp => {
          console.log(resp);

        })

      }
      else {

      }

      let data = {
        email: this.email.toLocaleLowerCase(),
        name: this.name,
        products: this.data.open,
        price: this.payment
      }
      this.http.post('https://brixback.herokuapp.com/mail/c_order', data, { responseType: 'text' }), (err => {
        alert(err)
      })



    }), (err) => {
      if (err) {
        alert(err.message)
      }
    }

    setTimeout(() => {
      let data = {
        email: 'contact@brixtonbest.se',
        name: this.name,
        products: this.data.open,
        price: this.payment
      }

      this.http.post('https://brixback.herokuapp.com/mail/c_order', data, { responseType: 'text' }), (err => {
        alert(err)
      })
    }, 3000);

  }

  detail: string

  // paypal
  private initConfig(): void {
    const payment = this.payment.toString()
    this.payPalConfig = {
      currency: 'SEK',
      clientId: 'AY9OmKWWrHZGHmWU9YYNuHjCvKJwJ7xeL4FmtzoSwGXJ0p6QBBh7ztZTDiMWAbPBhagTlOQb5DHLX2lT',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'SEK',
            value: payment,
            breakdown: {
              item_total: {
                currency_code: 'SEK',
                value: payment
              }
            }
          },
          items: [{
            name: 'Brixtonbest online Order',
            quantity: '1',
            category: 'DIGITAL_GOODS',
            unit_amount: {
              currency_code: 'SEK',
              value: payment,
            },
          }]
        }]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'horizontal',
        size: 'small',
        color: 'blue',
        shape: 'rect'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
          this.detail = details
        });

      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
        alert('Payment cancelled')
      },
      onError: err => {
        console.log('OnError', err);
        alert(err)
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      }
    };
  }

  userdetails: any;

  ngOnInit(): void {
    this.initConfig()
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

    const mail = localStorage.getItem('email')
    if (!mail) {

    }
    else {
      this.http.get('https://brixback.herokuapp.com/users/' + mail).subscribe((data: any) => {
        console.log(data);
        if (data.adress) {

          this.userdetails = data

        }
        else {

        }
      })
    }



  }




}
