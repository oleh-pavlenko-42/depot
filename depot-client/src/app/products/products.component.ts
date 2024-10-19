import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NewProductComponent } from './new-product/new-product.component';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatButtonModule, NewProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  isFormModalOpen = false;

  onFormModalOpen() {
    this.isFormModalOpen = true;
  }

  onFormModalClose() {
    this.isFormModalOpen = false;
  }
}
