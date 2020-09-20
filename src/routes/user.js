const AuthController = require('../app/Controllers/AuthController');
const SignupController = require('../app/Controllers/SignupController');
const TravelController = require('../app/Controllers/TravelsController');
const ReservationController = require('../app/Controllers/ReservationController');
const SearchTravelController = require('../app/Controllers/SearchTravelController');
const PersonInfoController = require('../app/Controllers/PersonInfoController');





module.exports = (src) => {
 

  src.post("/User/Auth", AuthController.login);
  src.post("/User/AddUser", SignupController.signup);
  src.post("/", TravelController.travels);
  src.post("/Reserve", ReservationController.reserve);
  src.post("/Search",SearchTravelController.search);
  src.post("/contentUpdate",PersonInfoController.ContactSettings);
  src.post("/UserInformation",PersonInfoController.UserInformation);
  src.post("/UserInfo",PersonInfoController.UserInfo);
  src.post("/recentlyReserved",ReservationController.recentlyReserved);

  
  };

