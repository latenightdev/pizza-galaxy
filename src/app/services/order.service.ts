import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../constants/api';
import { OrderDTO } from '../models/order.dto';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public crustOptions: String[] = ['Regular', 'Thin', 'Deep Dish'];
  public flavorOptions: String[] = ['Cheese', 'Pepperoni', 'Supreme', 'Veggie', 'Margherita', 'Hawaiian'];
  public sizeOptions: String[] = ['Small', 'Medium', 'Large'];

  constructor(private httpClient: HttpClient) { }

  create(order: OrderDTO): Observable<any> {
    const url = API.orders;
    return this.httpClient.post(url, order);
  }

  readAll(): Observable<Order[]> {
    const url = API.orders;
    return this.httpClient.get<Order[]>(url);
  }

  delete(order: Order): Observable<any> {
    const url = API.orders + '/' + order.Order_ID;
    return this.httpClient.delete(url);
  }

}
