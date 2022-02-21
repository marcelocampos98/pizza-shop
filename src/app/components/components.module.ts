import { CardShopComponent } from './card-shop/card-shop.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CardShopComponent
  ],
  exports: [
    CardShopComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ComponentsModule { }
