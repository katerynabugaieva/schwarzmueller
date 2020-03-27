import { Subject } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable()
export class ProductsService {
  private products = ['A book'];
  productsUpdated = new Subject();

  addProduct(productName: string) {
    console.log(productName, 'was added by service')
    this.products.push(productName);
    this.productsUpdated.next();
  }

  deleteProduct(productName: string) {
    console.log(productName, 'was deleted by service')
    this.products = this.products.filter(p => p !== productName);
    this.productsUpdated.next();
  }
  getProducts() {
    return [...this.products];
  }
}
