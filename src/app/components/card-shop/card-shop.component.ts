import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-shop',
  templateUrl: './card-shop.component.html',
  styleUrls: ['./card-shop.component.scss']
})
export class CardShopComponent implements OnInit {
  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }

  addCar(newItem: any) {
    let items = JSON.parse(localStorage.getItem('car') as any) || [];
    newItem.count = 1;

    if (items?.some((item: any) => item.id == newItem.id)) {
      let item = items.find((item: any) => item.id === this.item.id);
      item.count += 1;
    } else {
      items.push(newItem);
    }

    localStorage.setItem('car', JSON.stringify(items));
  }
}
