const CountryContraller = require('../app/Controllers/countryController');


module.exports = (src) => {
 

  src.post("/country/add", CountryContraller.insert);
  src.post("/country/update", CountryContraller.update);
  src.post("/country/view", CountryContraller.view);
  };

