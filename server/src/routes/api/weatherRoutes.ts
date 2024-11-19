import { Router, type Request, type Response } from 'express';
import weatherService from '../../service/weatherService';
const router = Router();

// import HistoryService from '../../service/historyService.js';
// import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', (req: Request, res: Response) => {
  
  const cityname:[] =[];
  city
  // TODO: GET weather data from city name
  WeatherService.fetchWeatherData
  // TODO: save city to search history
  cityname.appendchild(city);

});

// TODO: GET search history
router.get('/history', async (req: Request, res: Response) => {
  fetch 
  .
  .then


});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req: Request, res: Response) => {});

export default router;
