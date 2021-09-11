import { NotfoundComponent } from './notfound/notfound.component';
import { AuthComponent } from './auth/auth.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { TrackingComponent } from './tracking/tracking.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }, {
    path: "home",
    component: HomeComponent
  }, {
    path: "products",
    component: ProductsComponent
  }, {
    path: "about",
    component: AboutComponent
  }, {
    path: "cart",
    component: CartComponent
  }, {
    path: "checkout",
    component: CheckoutComponent
  }, {
    path: "tracking",
    component: TrackingComponent
  }, {
    path: "contact",
    component: ContactComponent
  },

  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComps = [
  HomeComponent,
  ProductsComponent,
  AboutComponent,
  ContactComponent,
  CheckoutComponent,
  CartComponent,
  TrackingComponent,
  AuthComponent,
]