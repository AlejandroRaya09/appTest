import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from 'src/app/services/validations/util.service';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css'],
})
export class TiempoComponent implements OnInit{

  formulario!: FormGroup;
  
  //INYECCION DE DEPENDENCIAS O "CONSTRUCTOR"
  private fb = inject(FormBuilder);
  private _util = inject(UtilService)
  

  ngOnInit(): void {
  this.iniciaFormulario();
  }

 //? METODO QUER INICIALIZA EL FORMULARIO
  iniciaFormulario(){
    this.formulario = this.fb.group({
      ciudad: ['',[Validators.required, this._util.notLocal, Validators.pattern('^[a-zA-Z]*$')]],
      codigo: ['',[Validators.required,Validators.pattern('^[a-zA-Z]*$')]]
    })

  }

  consultar(){
    if(this.formulario.status == 'INVALID'){
      console.log('INVALIDO')
    }else{
      console.log('VALIDO')
    }
  }


}
