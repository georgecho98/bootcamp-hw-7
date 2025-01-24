import dotenv from 'dotenv';
import fs from 'fs';
import dayjs, { type Dayjs } from 'dayjs';
import { time } from 'console';
import { parse } from 'path';
import { query } from 'express';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  name: String
  lat: number;
  lon: number;
}

// TODO: Define a class for the Weather object
class Weather {
  public temperature: number;
  public humidity: number;
  public currentDate: Dayjs;
  public windSpeed: number;
  public icon: string;

  constructor(temperature: number, humidity: number, currentDate: Dayjs, windSpeed: number, icon: string) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.currentDate = currentDate;
    this.windSpeed = windSpeed;
    this.icon = icon;
  }

}
// TODO: Complete the WeatherService class
//class WeatherService implement Coordinates{}
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  // const lat = latitude;
  // const lon = longitude;
  private apiKey?: string;

  private city?: string;
  private url?: string;

  constructor() {
    this.url = `https://api.openweathermap.org/data/2.5/`;     //  data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey};
    this.apiKey =   'a72fd5b57b39a74eb1bd5d872c138b8f';
   
  }

  private async fetchLocationData(query: string) {
    fetch(query)
    .then(response => {
      console.log(response)
    })
  }


  
  // TODO: Create destructureLocationData method
  private destructureLocationData(locationData: Coordinates) {
    const { name,lat,lon} = locationData;
    const cityCoordinates : Coordinates= {
      name,lat,lon
    }
    return cityCoordinates
    
  }
  
  //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
  //
  // TODO: Create buildGeocodeQuery method
  private buildGeocodeQuery(): string {
      const apiUrl = `${this.url}weather?q=${this.city}&appid=${this.apiKey}`
      return apiUrl
   }
  // TODO: Create buildWeatherQuery method
   private buildWeatherQuery(): string {
      const apiUrl = `${this.url}forcast?q=${this.city}&appid=${this.apiKey}`
      return apiUrl
   }
  // TODO: Create fetchAndDestructureLocationData method
  private async fetchAndDestructureLocationData() {
    


  }
  // TODO: Create fetchWeatherData method
  private async fetchWeatherData(query:string) { 
      return fetch(query)
             .then(response => response.json())
  }
  // TODO: Build parseCurrentWeather method
  private parseCurrentWeather(response: any) { 
    const {temperature,humidity,currentDate,windSpeed,icon} = response;
    const currentWeather = new Weather(temperature,humidity,currentDate,windSpeed,icon)
    return currentWeather
  }
  // TODO: Complete buildForecastArray method
 private buildForecastArray(currentWeather: Weather, weatherData: any[],weatherForecast:any[]) : any[]{

  for(let i=0;i<weatherData.length;i=i+8){
    const {temperature,humidity,currentDate,windSpeed,icon} = weatherData[i]
    const forecast = new Weather(temperature,humidity,currentDate,windSpeed,icon)
    weatherForecast.push(forecast)
  }
  return weatherForecast

 }
  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string) {
    this.city = city;
    const allForecast ?: Weather[]
    const queryURL1 : string = this.buildGeocodeQuery()
    const queryURL2:string = this.buildWeatherQuery()
    const response:any = this.fetchtchLocationData(queryURL1)
    const fiveDayForecast =  this.fetchWeatherrData(queryURL2)
    allForecast.push(currentForecast)
    const currentForecast = this.parseCurrentWeather(response)
    const allForecast = this.buildForecastArray(currentForecast,fiveDayForecast,allForecast)
   return allForecast
  }
}

export default new WeatherService();
