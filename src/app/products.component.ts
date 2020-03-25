import { Component } from "@angular/core";
import { ProductsService } from "./products.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html"
})
export class ProductsComponent {
  productName = "A book";
  isDisabled = true;
  products = ["A book", "A tree"];

  constructor(private productsService: ProductsService) {
    setTimeout(() => {
      this.isDisabled = false;
    }, 3000);
  }

  onAddProduct(form) {
    if (form.valid) {
      console.log(form.value);
      this.products.push(form.value.productName)
      // this.productsService.addProduct()
    }
  }

  onRemoveProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName);
  }
}
