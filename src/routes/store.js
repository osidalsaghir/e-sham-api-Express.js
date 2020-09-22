const StoreController = require('../app/Controllers/StoreController');


module.exports = (src) => {
 

  src.post("/store/add", StoreController.add);
  
  
  };

