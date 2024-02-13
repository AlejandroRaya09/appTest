import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {

  paises = ['Mexico', 'Chile', 'Argentina', 'Colombia', 'Ecuador']
  showPaises:boolean = true
  changeCss: boolean = true


  mostrar(){
    this.showPaises = !this.showPaises
  }

  cambioCss(){
    this.changeCss = !this.changeCss
  }
}
