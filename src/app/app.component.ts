import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pizza-shop';

  constructor() { }

  get countItems() {
    let items = JSON.parse(localStorage.getItem('car') as any);

    return items ? items.length : 0;
  }
}
