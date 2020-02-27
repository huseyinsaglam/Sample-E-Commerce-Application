import { Product } from './product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class Cart{

    public items: CartItem[] = [];
    public itemCount: number = 0; // toplam adet
    public total: number = 0; // toplam fiyat

    
    addItem(product:Product,quantity:number=1)
    {
        let item = this.items.find(i=> i.product.id==product.id) // urun var mı yok mu arat
        if(item != undefined) // urun tanımlı ise
        {
            item.quantity= item.quantity + quantity; // urun miktarini bir arttir
        }
        else{
            this.items.push(new CartItem(product,quantity)) //tanımlı degilse ekleme yap
        }
        this.calculate();
    }

    calculate()
    {
         this.itemCount = 0; // toplam adet
         this.total = 0; // toplam fiyat
        
         this.items.forEach(p=> {
            this.itemCount= this.itemCount +p.quantity;
            this.total = this.total+ (p.quantity * p.product.price)
        })

    }

    removeItem(id: number) {
        let index = this.items.findIndex(i=>i.product.id==id);
        this.items.splice(index,1);
        this.calculate();
    }

    clear() {
        this.items = [];
        this.itemCount = 0;
        this.total = 0;
    }
}


export class CartItem{
    constructor(
        public product: Product,
        public quantity: number) { }


}