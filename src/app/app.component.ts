import { Component } from '@angular/core';
import { Products } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Learning App';

  products: Products[] = [
    {
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
    },
    {
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
    },
    {
      name: 'Phone Standard',
      price: 299,
      description: '',
    },
  ];
}
