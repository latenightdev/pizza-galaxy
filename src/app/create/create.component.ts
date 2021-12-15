import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { OrderDTO } from '../models/order.dto';
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, public orderService: OrderService, private toastService: ToastService, private router: Router) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      crust: ['', Validators.required],
      flavor: ['', Validators.required],
      size: ['', Validators.required],
      table: [null, Validators.required]
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
      this.toastService.success('Create new order success!');
      this.router.navigate(['/view']);
    }, error => {
      console.error(error);
    });
  }

}
