import { Component, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
    console.log('title', this.form.value.title);
    console.log('description', this.form.value.description);
    console.log('imageUrl', this.form.value.imageUrl);
    console.log('price', this.form.value.price);
    this.close.emit();
  }
}
