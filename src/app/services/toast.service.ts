import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toast: ToastrService) { }

  success(message: string) {
    this.toast.success(message);
  }

  error(message: string) {
    this.toast.error(message);
  }

}
