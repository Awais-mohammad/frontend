import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<AuthComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
  ) {
    // alert(data.open)
  }

  name: string;
  email: string;
  password: string;

  signUp() {
    if (!this.name || !this.email || !this.password) {
      alert('fields cannot be blank!')

    }
    else {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      re.test(this.email)

      if (re.test(this.email) == true) {
        alert('email format is good!!')

        if (this.password.length < 6) {
          alert('password cannot be less than 6')
        }
        else {
          alert('ALL good ')

          let credentials = {
            email: this.email.toLocaleLowerCase(),
            password: this.password
          }

          this.http.post('http://localhost:3000/users', credentials, { responseType: 'text' }).subscribe(response => {
            console.log(response);
            if (response.includes('User with this email already exists!!!')) {
              alert('User with this email already exists!!!')
            }
            else {
              alert('created successfully!! login in progress!!')
              this.login()
            }
          })
        }
      }
      else {
        alert('invalid email format')
      }


    }
  }


  login() {
    console.log('method called!!');

    if (!this.email || !this.password) {
      alert('Fields cannot be empty')
    }
    else {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      re.test(this.email)

      if (re.test(this.email) == true) {


        let credentials = {
          email: this.email.toLocaleLowerCase(),
          password: this.password
        }

        this.http.post('http://localhost:3000/auth', credentials, { responseType: 'text' }).subscribe(resp => {

          if (resp.includes('No records associated with this email')) {
            alert(resp)
          }
          else if (resp.includes('Password entered is wrong')) {
            alert(resp)
          }
          else {
            alert('login success!!!')

            localStorage.setItem('jwt', resp)
            const jwt = localStorage.getItem('jwt')

            console.log(jwt, 'jwt')
            location.reload()
            this.close()

          }
        })

      }
      else {
        alert('invalid email format')
      }



    }
  }
  close() {
    this.dialogRef.close({ data: '' })
  }

  open(data) {
    this.dialogRef.close({ data: data })
  }

  ngOnInit() {



  }

}
