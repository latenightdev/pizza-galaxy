import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { OrderDTO } from '../models/order.dto';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, public orderService: OrderService) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      crust: [''],
      flavor: [''],
      size: [''],
      table: [0]
    });
  }

  onSubmit(): void {
    const order = new OrderDTO(
      this.createForm.get('crust')?.value,
      this.createForm.get('flavor')?.value,
      this.createForm.get('size')?.value,
      this.createForm.get('table')?.value
    );
    this.orderService.create(order).subscribe(response => {
      console.log(response);
    }, error => {
      console.error(error);
    });
  }

}
