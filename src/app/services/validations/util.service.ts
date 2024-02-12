import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }


  notLocal(control: FormControl){
    const value: string = control.value?.trim().toLowerCase();

    if (value == 'local'){
      return {
        notLocal: true
      }
    }else{
      return null
    }
  }
}
