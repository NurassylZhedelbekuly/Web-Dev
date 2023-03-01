import { Component, OnInit,Input } from '@angular/core';

import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products = products;
  prd: Product | undefined;
  constructor(private activeRoute: ActivatedRoute){}
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  ngOnInit(): void {
    const routeParams = this.activeRoute.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('productCategory'));

    this.prd = products.find(product => product.categories === productIdFromRoute);
  }

}