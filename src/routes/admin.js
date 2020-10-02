const CountryContraller = require('../app/Controllers/countryController');
const CityContraller = require('../app/Controllers/cityContraller');
const NeighborhoodContraller = require('../app/Controllers/neighborhoodContraller');

module.exports = (src) => {
 
   //add new coutry..
  src.post("/country/add", CountryContraller.insert);
  src.post("/country/update", CountryContraller.update);
  src.post("/country/view", CountryContraller.read);
  src.post("/country/delete", CountryContraller.delete);

  //add new city...
  src.post("/city/add", CityContraller.insert);
  src.post("/city/update", CityContraller.update);
  src.post("/city/view", CityContraller.read);
  src.post("/city/delete", CityContraller.delete);

  //add new neighborhood...
  src.post("/neighborhood/add", NeighborhoodContraller.insert);
  src.post("/neighborhood/update", NeighborhoodContraller.update);
  src.post("/neighborhood/view", NeighborhoodContraller.read);
  src.post("/neighborhood/delete", NeighborhoodContraller.delete);
  };

