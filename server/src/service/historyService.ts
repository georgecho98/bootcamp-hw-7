import fs = require('fs');

// TODO: Define a City class with name and id properties
class city  {
  name: string; 
  id: number;

  constructor(name:string, id:number) {
    this.name = name;
    this.id = id;}}
// TODO: Complete the HistoryService class
class HistoryService  {

    // TODO: Define a read method that reads from the searchHistory.json file
  private async read() {
    fs.readFile('searchHistory.json', 'utf8', (err, data) => {
      if (err) {
          console.error('Error reading file:', err);
          return;
      }

      const history = JSON.parse(data); // Parse the JSON string into an object
      console.log(history);
      return history;
  })
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  private async write(cities: []) {
    const data = JSON.stringify(cities, null, 2);
    
    fs.writeFile('searchHistory.JSON',data, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
}
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  async getCities() {
    for (let i=0; i<this.read.length;i++){
     x[i]= this.read[i];
    }
    return x;
}
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  async addCity(city: string) {
    const xx =   
    xx.appendchild(city)

  }
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  // async removeCity(id: string) {}
}

export default new HistoryService();
