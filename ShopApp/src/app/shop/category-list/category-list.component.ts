import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  public selectedCategory:Category =null ;
  @Input() categories : Category[]=[]

  // burada secili gelen category bilgisini bir üst componente
  // shopComponent'e gonderirken output parametresini gondeririz
  @Output() selectCategory = new EventEmitter<Category>();
  constructor( private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository) { }

  ngOnInit() {
  }

  changeCategory(newCategory: Category) {
    // console.log(newCategory);
    console.log( this.productRepository.getProducts(this.selectedCategory).length);
     this.selectedCategory = newCategory;
     // burada secili olarak gelen parametresi 
     // output ile isaretli olan selectCategory'nin emit aracılıgı ile
     // dısarı bir üst componentlere acmıs oluyoruz
     this.selectCategory.emit(newCategory);

 }

  
}
