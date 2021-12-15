import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../constants/api';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public crustOptions: String[] = ['Regular', 'Thin', 'Deep Dish'];
  public flavorOptions: String[] = ['Cheese', 'Pepperoni', 'Supreme', 'Veggie', 'Margherita', 'Hawaiian'];
  public sizeOptions: String[] = ['Small', 'Medium', 'Large'];

  constructor(private httpClient: HttpClient) { }

  create(order: Order): Observable<any> {
    const url = API.orders;
    return this.httpClient.post(url, order);
  }

}
