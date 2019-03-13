import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  categories$;

  constructor(categoryService: CategoryService) { // no private - it won't be used anywhere outside the constructor
    this.categories$ = categoryService.getCategories();
  }

}
