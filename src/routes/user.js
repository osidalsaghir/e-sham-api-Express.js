const AuthController = require('../app/Controllers/AuthController');
const SignupController = require('../app/Controllers/SignupController');

module.exports = (src) => {
 

  src.post("/User/Auth", AuthController.login);
  src.post("/Signup",SignupController.signup);
  
  };

