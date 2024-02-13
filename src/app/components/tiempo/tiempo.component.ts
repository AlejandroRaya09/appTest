import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TempeaturaService } from 'src/app/services/tempeatura.service';
import { UtilService } from 'src/app/services/validations/util.service';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css'],
})
export class TiempoComponent implements OnInit{

  formulario!: FormGroup;

  name!:string;
  temperatura!:number;
  humedad!:number;
  latitud!:number;
  longitud!:number;
  descripcion!:string;
  fecha = new Date();

  showError: boolean = false;
  
  //INYECCION DE DEPENDENCIAS O "CONSTRUCTOR"
  private fb = inject(FormBuilder);
  private _util = inject(UtilService)
  private _tiempo = inject(TempeaturaService)
  

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
    if(this.formulario.status == 'VALID'){
      let ciudad: string = this.formulario.get('ciudad')?.value
      let codigo: string = this.formulario.get('codigo')?.value

      this._tiempo.getEstadoTiempo(ciudad,codigo).subscribe({
        next:(respuesta:any) =>{
          this.showError = false;
          const tiempo = respuesta;

          this.name = tiempo.name;
          this.temperatura =tiempo.main.temp;
          this.humedad = tiempo.main.humidity;
          this.latitud = tiempo.coord.lat;
          this.longitud = tiempo.coord.lon;
          this.descripcion = tiempo.weather[0].description;
        },
        error:(error)=>{
          this.showError = true;
        }
      })

 }else{
  console.log('ERROR')
 }
}


}
