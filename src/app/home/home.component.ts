import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = [
    {
      id: 1,
      name: 'Pizza Margherita',
      price: '20.00',
      image: 'assets/images/pizza_1.png',
      discount: '20',
    },
    {
      id: 2,
      name: 'Pizza Capricciosa',
      price: '12.00',
      image: 'assets/images/pizza_2.png',
    },
    {
      id: 3,
      name: 'Pizza Prosciutto',
      price: '13.00',
      image: 'assets/images/pizza_3.png',
    },
    {
      id: 4,
      name: 'Pizza Funghi',
      price: '15.00',
      image: 'assets/images/pizza_4.png',
    },
    {
      id: 5,
      name: 'Pizza Quattro Stagioni',
      price: '16.00',
      image: 'assets/images/pizza_5.png',
    },
    {
      id: 6,
      name: 'Pizza Vegetariana',
      price: '15.00',
      image: 'assets/images/pizza_6.png',
    },
    {
      id: 7,
      name: 'Pizza Quattro Formaggi',
      price: '17.00',
      image: 'assets/images/pizza_7.png',
    },
    {
      id: 8,
      name: 'Pizza Napoletana',
      price: '16.00',
      image: 'assets/images/pizza_8.png',
    },
  ]
}
