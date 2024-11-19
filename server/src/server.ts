import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
import path from 'path';
// Import the routes
import routes from './routes/index.js';

const app = express();

const PORT = process.env.PORT || 3001;

// TODO: Serve static files of entire client dist folder
app.use(express.static(path.join(__dirname, 'client/dist')));
// TODO: Implement middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.post('/', function (req, res) {
    console.log(req.body.name)
    res.end();
})

// For parsing application/json
app.use(express.urlencoded({ extended: true }));
// TODO: Implement middleware to connect the routes
app.use(routes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
  });
// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
