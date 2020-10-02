const AuthController = require('../app/Controllers/AuthController');
const CommentsController = require('../app/Controllers/CommentsController');
const OrderController = require('../app/Controllers/OrderController');
const RatingController = require('../app/Controllers/RatingController');
const ReurnController = require('../app/Controllers/ReurnController');
const SignupController = require('../app/Controllers/SignupController');
const UserAddressController = require('../app/Controllers/UserAddressController');
const WishlistController = require('../app/Controllers/WishlistController');

module.exports = (src) => {
 

  src.post("/User/Auth", AuthController.login);
  src.post("/Signup",SignupController.signup);

  
  // WishlistController maneger .... 
  src.post("/wishlist/add", WishlistController.add);
  src.post("/wishlist/update", WishlistController.update);
  src.post("/wishlist/view", WishlistController.read);
  src.post("/wishlist/delete", WishlistController.delete);
  
  // order maneger .... 
  src.post("/order/add", OrderController.add);
  src.post("/order/update", OrderController.update);
  src.post("/order/view", OrderController.read);
  src.post("/order/delete", OrderController.delete);

   // reating maneger .... 
   src.post("/rating/add", RatingController.add);
   src.post("/rating/update", RatingController.update);
   src.post("/rating/view", RatingController.read);
   src.post("/rating/delete", RatingController.delete);

   // return maneger .... 
   src.post("/return/add", ReurnController.add);
   src.post("/return/update", ReurnController.update);
   src.post("/return/view", ReurnController.read);
   src.post("/return/delete", ReurnController.delete);

   // comment maneger .... 
   src.post("/comment/add", CommentsController.add);
   src.post("/comment/update", CommentsController.update);
   src.post("/comment/view", CommentsController.read);
   src.post("/comment/delete", CommentsController.delete);

   // user address maneger .... 
   src.post("/useraddress/add", UserAddressController.add);
   src.post("/useraddress/update", UserAddressController.update);
   src.post("/useraddress/view", UserAddressController.read);
   src.post("/useraddress/delete", UserAddressController.delete);
  
  
  };

