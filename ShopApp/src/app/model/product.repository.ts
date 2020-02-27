import { Injectable, OnInit } from '@angular/core';
import { Product } from './product.model';
import { RestService } from './rest.service';
import { Category } from './category.model';


@Injectable()
export class ProductRepository implements OnInit {
   
    public products: Product[] = []; 
    public newSelectedCategory : Category= null;
    constructor(private restService: RestService) {
        // subscribe gelen veriler p ile geliyor...
       this.restService.getProducts().subscribe(p=> this.products=p)
     }

    ngOnInit() {
        
    }

    getProduct(id : number):Product
    {
       return this.products.find(i => i.id ===id)
    }
    getProducts(categories: Category): Product[] {
        this.newSelectedCategory = categories;
       
        console.log( this.newSelectedCategory)
        if(this.newSelectedCategory != null) 
            return this.products.filter(p => p.category == this.newSelectedCategory.name);
        else
        {
            return this.products;
        }
           
    }
}