import { Component, input } from '@angular/core';
import { Product } from '../product.model';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {
  product = input.required<Product>();
}
