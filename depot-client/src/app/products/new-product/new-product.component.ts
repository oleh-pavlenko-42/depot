import { Component, inject, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductsService } from '../products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss',
})
export class NewProductComponent {
  private productsService = inject(ProductsService);

  form = new FormGroup({
    title: new FormControl('', {
      validators: [Validators.required],
    }),
    description: new FormControl('', {
      validators: [Validators.required],
    }),
    imageUrl: new FormControl('', {
      validators: [Validators.required],
    }),
    price: new FormControl('', {
      validators: [Validators.required],
    }),
  });

  close = output();

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    const newProduct = new Product(
      new Date().getTime().toString(),
      this.form.value.title!,
      this.form.value.description!,
      this.form.value.imageUrl!,
      +this.form.value.price!
    );
    this.productsService.addProduct(newProduct);
    this.close.emit();
  }
}
