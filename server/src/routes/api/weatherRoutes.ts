import { Router, type Request, type Response } from 'express';
import weatherService from '../../service/weatherService';
import fs from 'fs';
import path from 'path';
const router = Router();

// import HistoryService from '../../service/historyService.js';
// import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/pi/weather', (req: Request, res: Response) => {
  
  const city = req.body.city;

  // TODO: GET weather data from city name

  // TODO: save city to search history
  try {
    // TODO: GET weather data from city name
    const weatherData = await WeatherService.fetchWeatherData(city);

    // TODO: Save city to search history
    const dataPath = path.join(__dirname, 'searchHistory.json');
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read history data' });
        }

        const history = JSON.parse(data);
        history.push({ city }); // Add the new city to the history

        fs.writeFile(dataPath, JSON.stringify(history), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to save city to history' });
            }

            // Respond with the weather data
            res.json(weatherData);
        });
    });
} catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching weather data' });
}

});

// TODO: GET search history
router.get('api/weather/history', async (req: Request, res: Response) => {
  try {
    const dataPath = path.join(__dirname, 'searchHistory.json');
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read history data' });
        }
        const history = JSON.parse(data);
        res.json(history);
    });
} catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching weather history' });
}
});;

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req: Request, res: Response) => {});

export default router;
