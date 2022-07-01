import { Component, OnInit } from '@angular/core';

import {WeatherService} from '../../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  weatherArray:any[] = [];
  searchText:string = "";
  firstJason = true;
  showSearch = false;

  constructor(private _weatherService:WeatherService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this._weatherService.getWeather().subscribe(data => {
      this.weatherArray = data;
      console.log(this.weatherArray);
    }, error => {
      console.error(error);
    })
  }

  searchWeather(){
    if(this.firstJason){
      if(this.searchText.length === 0){
        alert("No hay ninguna ciudad que buscar\nPor favor escriba algo");
        this.showSearch = false;
      } else{
        if(this.weatherArray[0].toLowerCase().includes(this.searchText)){
          this.showSearch = true;
        }else{
          alert("No encontramos ninguna ciudad con esos parametros en nuestro Registro");
          this.showSearch = false;
        }
      }
    }else{

    }
  }

  myLocation(){
    alert("En construcción :(");
  }

}
