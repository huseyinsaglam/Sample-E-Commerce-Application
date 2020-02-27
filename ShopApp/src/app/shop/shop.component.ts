import { Component, OnInit } from "@angular/core";
import { ProductRepository } from '../model/product.repository';
import { CategoryRepository } from '../model/category.repository';
import { Product } from '../model/product.model';
import { Category } from '../model/category.model';



@Component({
    selector: 'shop',
    templateUrl: 'shop.component.html',

})
export class ShopComponent implements OnInit{
    public productsPerPage = 3;
    public selectedPage = 1;
    // pageNumbers = [1,2,3,4,5]
    public selectedCategory:Category =null ;
    constructor(
        private productRepository: ProductRepository,
        private categoryRepository: CategoryRepository) { }

        ngOnInit() {
          }
        

    get pageNumbers(): number[] {
            return Array(Math.ceil(this.productRepository
                .getProducts(this.selectedCategory).length / this.productsPerPage))
                .fill(0)
                .map((a, i) => i + 1);
    }
    get products(): Product[] // ozellik
    {
        let index = (this.selectedPage - 1) * this.productsPerPage;
        
        return this.productRepository.getProducts(this.selectedCategory)
        .slice(index, index + this.productsPerPage);;
        
    }

    get categories(): Category[] // ozellik
    {
        return this.categoryRepository.getCategories();
    }

   
 
    changePage(p: number) {
        this.selectedPage = p;
    }

    getCategory(category : Category)
    {
        this.selectedCategory = category;
    }
    
}