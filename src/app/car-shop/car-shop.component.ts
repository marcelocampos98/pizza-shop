import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-shop',
  templateUrl: './car-shop.component.html',
  styleUrls: ['./car-shop.component.scss']
})
export class CarShopComponent implements OnInit {
  public list: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    this.list = JSON.parse(localStorage.getItem('car') as any) || [];
  }

  remover(itemId: any) {
    this.list = this.list.filter(item => item.id !== itemId);

    localStorage.setItem('car', JSON.stringify(this.list));
  }

}
