import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { ProductComponent } from "./product/product.component";
import { ProductsComponent } from "./products.component";
import { HomeComponent } from "./home.component";
import { MaterialsComponent } from "./materials/materials.component";

import { ProductsService } from "./products.service";

import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./material.module";
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    HomeComponent,
    MaterialsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
