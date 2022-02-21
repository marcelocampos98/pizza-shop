import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarShopComponent } from './car-shop/car-shop.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "car",
    component: CarShopComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
