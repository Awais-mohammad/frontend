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
import { NgxPayPalModule } from 'ngx-paypal';
import { NgxStripeModule } from 'ngx-stripe';
import { RecoverpasComponent } from './recoverpas/recoverpas.component';
import { TranslateConfigService } from './translate-config.service';
import { NgxImageZoomModule } from 'ngx-image-zoom';

// fucking translation thing!!
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ViewImageComponent } from './view-image/view-image.component';

export function LanguageLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    routingComps,
    FooterComponent,
    HomeComponent,
    FavComponent,
    NotfoundComponent,
    ProdDetailComponent,
    RecoverpasComponent,
    ViewImageComponent,
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
    NgxStripeModule.forRoot('pk_live_0M3nFFe2nP2UtSwBbKw4Ht8t00TivPKps0'),
    NgxPayPalModule,
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: httpTranslateLoader,
    //     deps: [HttpClient]
    //   }
    // })
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (LanguageLoader),
        deps: [HttpClient]
      }
    }),
    NgxImageZoomModule,
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: AuthComponent
    },
    AuthComponent,
    // TranslateConfigService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// // AOT compilation support
// export function httpTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }