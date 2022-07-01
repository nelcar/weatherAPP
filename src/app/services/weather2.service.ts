import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

import { Weather } from '../interfaces/weather';

@Injectable({
  providedIn: 'root'
})
export class Weather2Service {

  private url = 'https://run.mocky.io/v3/8227e45f-96fe-46a2-a4d4-1143518b2e20'

  constructor( private http:HttpClient ) { }

  getWeather(){
    return this.http.get(`${ this.url }`).pipe(map(resp => {
      return this.createArray(resp);
    }));
  }

  private createArray(data:any){
    if(data === null){
      return [];
    }else{
      const WEATHER:Weather[] = [];
      Object.keys(data).forEach(key => {
        const VARIABLE:Weather = data[key];
        WEATHER.push(VARIABLE);
      });
      return WEATHER;
    }
  }
}
