const CountryContraller = require('../app/Controllers/countryController');
const CityContraller = require('../app/Controllers/cityContraller');
const NeighborhoodContraller = require('../app/Controllers/neighborhoodContraller');
const AdminController = require('../app/Controllers/AdminController');
const CitiesstoreController = require('../app/Controllers/CitiesstoreController');





module.exports = (src) => {
 
  
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

  // Admin maneger .... 
  src.post("/admin/add", AdminController.add);
  src.post("/admin/update", AdminController.update);
  src.post("/admin/view", AdminController.read);
  src.post("/admin/delete", AdminController.delete);

  // store city relations maneger .... 
  src.post("/citystore/add", CitiesstoreController.add);
  src.post("/citystore/update", CitiesstoreController.update);
  src.post("/citystore/view", CitiesstoreController.read);
  src.post("/citystore/delete", CitiesstoreController.delete);
  };

