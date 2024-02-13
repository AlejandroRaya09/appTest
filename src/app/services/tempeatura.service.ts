import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
const appId = 'e46f0f3faabfb503e7e27634a950a619'
@Injectable({
  providedIn: 'root'
})
export class TempeaturaService {

  constructor(private http: HttpClient) { }


  getEstadoTiempo(ciudad:string, codigo:string){
    const url = `${urlBase}?q=${ciudad},${codigo}&appid=${appId}`;
    return this.http.get(url)
  }


}
