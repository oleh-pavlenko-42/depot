import { Component, inject, input, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { MatTableModule } from '@angular/material/table';
import { ProductsService } from '../products.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.scss',
})
export class ProductTableComponent {
  products = input.required<Product[]>();

  displayedColumns: string[] = ['imageUrl', 'title', 'price', 'actions'];
}
