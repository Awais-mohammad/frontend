import { AuthComponent } from './auth/auth.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComps } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavComponent } from './fav/fav.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProdDetailComponent } from './prod-detail/prod-detail.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';

import { NgxStripeModule } from 'ngx-stripe';
import { CheckComponent } from './check/check.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComps,
    FooterComponent,
    HomeComponent,
    FavComponent,
    NotfoundComponent,
    ProdDetailComponent,
    CheckComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatListModule,
    MatFormFieldModule,
    MatMenuModule,
    MatInputModule,
    LayoutModule,
    MatToolbarModule,
    MatTableModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatChipsModule,
    MatTabsModule,
    MatProgressBarModule,
    MatStepperModule,
    NgxStripeModule.forRoot('pk_test_ND4MPDNKZaqfLcteOBlHE3fU00zLz1x7SM'),

  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: AuthComponent
    },
    AuthComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
