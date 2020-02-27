import { Order } from './order.model';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderRepository {
    private orders: Order[] = [];

    // sorgularımız http uzerinden gondericegimiz icin rest service constructor olarak kullanıyoruz
    constructor(private restService: RestService) {}

    // gondericek oldugumuz http metotları misal getorders butun orderlari bana getir
    getOrders(): Order[] {
        return this.orders;
    }

    // bana gelen order bilgilerini restservice gonderiyorum
    saveOrder(order: Order): Observable<Order> {
        return this.restService.saveOrder(order);
    }
}