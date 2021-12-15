import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.less']
})
export class ConfirmComponent implements OnInit {

  @Output() confirmCancel: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() order: Order = new Order();

  constructor() { }

  ngOnInit(): void {
  }

  confirm(): void {
    this.confirmCancel.emit(true);
  }

}
