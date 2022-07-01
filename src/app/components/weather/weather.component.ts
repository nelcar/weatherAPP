import { Component, OnInit } from '@angular/core';
import {Weather2Service} from '../../services/weather2.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherArray:any[] = [];
  searchText:string = "";
  firstJason = true;
  showSearch = false;

  constructor(private _weatherService:Weather2Service) { }

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
