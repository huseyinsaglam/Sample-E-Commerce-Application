import { NgModule } from '@angular/core';
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './shop.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';


@NgModule({
    imports: [ModelModule,BrowserModule,FormsModule,RouterModule],
    declarations: [ShopComponent, NavbarComponent, CartDetailComponent, CheckoutComponent, CartSummaryComponent, ProductListComponent, CategoryListComponent],
    exports: [ShopComponent,CartDetailComponent, CheckoutComponent]
})
export class ShopModule {}