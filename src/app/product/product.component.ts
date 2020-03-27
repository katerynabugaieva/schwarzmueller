import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() productName: string;
  @Output() productClicked = new EventEmitter();

  constructor(private productsService: ProductsService) {}
  onClicked() {
    this.productsService.deleteProduct(this.productName);
  }
}
