import { ProductService } from './../../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy {

  products: any[];
  fiteredProducts: any[];
  subscription: Subscription;

  constructor(private productService: ProductService) {
    this.subscription = productService.getAll().subscribe(products => {
      console.log("productService.getAll");
      this.fiteredProducts = this.products = products;
    });
  }

  filter(query: string) {
    this.fiteredProducts = (query) ?
      this.products.filter(p => p.payload.child('title').val().toLowerCase().includes(query.toLowerCase())) :
      this.products;
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
    this.subscription.unsubscribe();
  }
}
