const AuthController = require('../app/Controllers/AuthController');


module.exports = (src) => {
 

  src.post("/User/Auth", AuthController.login);
  
  
  };

