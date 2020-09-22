const AuthController = require('../app/Controllers/AuthController');
const signupController = require('../../app/Controllers/signupController');

module.exports = (src) => {
 

  src.post("/User/Auth", AuthController.login);
  src.post("/Signup",signupController.Signup);
  
  };

