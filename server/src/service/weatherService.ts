import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface xx {

  Coordinates:

}
// TODO: Define a class for the Weather object
class weather {
    temperature: number;
    humidity:number;

    constructor (temperature:number,humidity :number) {
      this.temperature=temperature;
      this.humidity = humidity;
    }

}
// TODO: Complete the WeatherService class
class WeatherService implements xx {
  // TODO: Define the baseURL, API key, and city name properties
    const city = document.getElementById('city-input').value;
    const apiKey = 'a72fd5b57b39a74eb1bd5d872c138b8f';
    const url = "https://api.openweathermap.org";
    // `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  // TODO: Create fetchLocationData method
  private async fetchLocationData(query: string) {
      fetch(url)
        .then(response => response.json())
        .then(data => {

        const tempInF = (data.main.temp * 9 / 5) +32;
          const weatherInfo = `
              <p>${data.name} Weather</p>
              <p>Temperature: ${tempInF.toFixed(2)} °F</p>
              <p>Humidity: ${data.main.humidity}%</p>
              <p>Description: ${data.weather[0].description}</p>
          `;
          document.getElementById('weather-info').innerHTML = weatherInfo;
        })
        .catch(error => {
          toastr.error('Invalid City');
          console.error('Error fetching weather data:', error);
      });
    }

  // TODO: Create destructureLocationData method
  private destructureLocationData(locationData: Coordinates) {
      const locationData = {
        x : xxx;
        y : seddd;
      }

      let {x, y } = jesus;
  }



  // TODO: Create buildGeocodeQuery method
  // private buildGeocodeQuery(): string {}
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
