import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductsService } from './products.service';
import { Product } from './product.model';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductTableComponent } from './product-table/product-table.component';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MatButtonModule,
    NewProductComponent,
    ProductItemComponent,
    ProductTableComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  private productsService = inject(ProductsService);

  isFormModalOpen = false;
  products: Product[] = [];

  ngOnInit(): void {
    this.products = this.productsService.allProducts();
    this.productsService.productsUpdated.subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  onFormModalOpen() {
    this.isFormModalOpen = true;
  }

  onFormModalClose() {
    this.isFormModalOpen = false;
  }
}
