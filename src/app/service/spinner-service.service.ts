import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private spinnerservice: NgxSpinnerService) { }

  public callSpinner(){
    this.spinnerservice.show();
  }

  public stopSpinner(){
    this.spinnerservice.hide();
  }
}
