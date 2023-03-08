import { Component } from '@angular/core';
import { Product } from '../products';
import { products } from '../products';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent {

    prods = products;
    categories : Product[]=[];
    constructor(){
        this.categories=[];
        for(let x of products){
            let res=this.categories.find(element=>element.categories===x.categories);
            if(res===undefined) this.categories.push(x);

        }
    }
}