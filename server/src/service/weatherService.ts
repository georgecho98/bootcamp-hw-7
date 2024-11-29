import dotenv from 'dotenv';
import fs from 'fs';
import dayjs,{type Dayjs} from 'dayjs';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  cityname: String
  latitude: number;
    longitude: number;
}

// TODO: Define a class for the Weather object
class weather {
    public temperature: number;
    public humidity:number;
    public currentDate:Dayjs;
    public windSpeed:number;
    public icon: string;

    constructor (temperature:number,humidity :number,currentDate:Dayjs,windSpeed: number,icon:string ) {
      this.temperature=temperature;
      this.humidity = humidity;
      this.currentDate = currentDate;
      this.windSpeed = windSpeed;
      this.icon= icon;
    }

}
// TODO: Complete the WeatherService class
class WeatherService implements Coordinates {
  // TODO: Define the baseURL, API key, and city name properties
    const lat = latitude;
    const lon = longitude;
    const apiKey = 'a72fd5b57b39a74eb1bd5d872c138b8f';
    const url =  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;


  private async fetchLocationData(query: string) {
      const this.x = latitude;
      const this.y = longitude;
  }

  // TODO: Create destructureLocationData method
  private destructureLocationData(locationData: Coordinates) {
    const { latitude, longitude } = locationData;
    const locationData = {
      x: latitude,
      y: longitude
    }
    let { x, y } = locationData;
  }

  // TODO: Create buildGeocodeQuery method
  private buildGeocodeQuery(): string {}
  // TODO: Create buildWeatherQuery method
  // private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
  private async fetchAndDestructureLocationData() {
    const url = xxxx;


  }
  // TODO: Create fetchWeatherData method
  private async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  // async getWeatherForCity(city: string) {}
}

export default new WeatherService();
