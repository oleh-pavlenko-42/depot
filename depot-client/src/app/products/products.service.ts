import { effect, Injectable, signal } from '@angular/core';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private products = signal<Product[]>([]);

  allProducts = this.products.asReadonly();

  constructor() {
    const products = localStorage.getItem('products');
    if (products) {
      const loadedProducts = JSON.parse(products);
      this.products.set(loadedProducts);
    }
    effect(() => {
      localStorage.setItem('products', JSON.stringify(this.allProducts()));
    });
  }

  addProduct(newProduct: Product) {
    this.products.update((oldProducts) => [...oldProducts, newProduct]);
  }
}
