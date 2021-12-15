import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.less']
})
export class ViewComponent implements OnInit {

  public orders: Order[] = [];
  public filteredOrders: Order[] = [];
  public selectedOrder: Order = new Order();
  public searchTerm: string = '';

  constructor(private orderService: OrderService, private toastService: ToastService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  filterOrders(): void {
    if (this.searchTerm) {
      const that = this;
      const filtered: Order[] = [];
      this.orders.forEach(function(order) {
        let orderClone = Object.assign({}, order);
        delete orderClone.Timestamp;
        const orderString = JSON.stringify(orderClone);
        const regex = new RegExp(that.searchTerm, 'i');
        if (orderString.search(regex) !== -1) {
          filtered.push(order);
        };
      });
      this.filteredOrders = filtered;
    } else {
      this.filteredOrders = this.orders;
    }
  }

  getOrders(): void {
    this.orderService.readAll().subscribe(response => {
      this.orders = response;
      this.filterOrders();
    }, error => {
      console.error(error);
    });
  }

  onCancel(order: Order): void {
    this.selectedOrder = order;
  }

  onConfirm(): void {
    this.orderService.delete(this.selectedOrder).subscribe(response => {
      this.toastService.success('Order cancelled successfully!');
      this.getOrders();
    }, error => {
      console.error(error);
    })
  }

  onSearch(): void {
    this.filterOrders();
  }

}
