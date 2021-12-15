import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private orderService: OrderService) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      crust: [''],
      flavor: [''],
      size: [''],
      table: [null]
    });
  }

  onSubmit(): void {
    const pizzaObject = {
      "Crust": this.createForm.get('crust')?.value,
      "Flavor": this.createForm.get('flavor')?.value,
      "Size": this.createForm.get('size')?.value,
      "Table_No": this.createForm.get('table')?.value
    };
    console.log(pizzaObject);
    this.orderService.create(pizzaObject).subscribe(response => {
      console.log(response);
    }, error => {
      console.error(error);
    });
  }

}
