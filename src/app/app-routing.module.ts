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
    redirectTo: "products",
    pathMatch: "full"
  }, {
    path: "home",
    component: HomeComponent
  }, {
    path: "products",
    component: ProductsComponent
  },  {
    path: "about",
    component: AboutComponent
  },  {
    path: "cart",
    component: CartComponent
  },  {
    path: "checkout",
    component: CheckoutComponent
  },  {
    path: "tracking",
    component: TrackingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComps = [
  HomeComponent,
  ProductsComponent,
  
]