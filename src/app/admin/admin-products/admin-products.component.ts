import { ProductService } from './../../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { query } from '@angular/core/src/render3';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy {

  products: any[];
  fiteredProducts: any[];
  query : string;
  subscription: Subscription;

  constructor(private productService: ProductService) {
    this.subscription = productService.getAll().subscribe(products => {
      this.fiteredProducts = this.products = products;
      this.query = "";
    });
  }

  filter() {
    this.fiteredProducts = (this.query) ?
      this.products.filter(p => p.payload.child('title').val().toLowerCase().includes(this.query.toLowerCase())) :
      this.products;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
