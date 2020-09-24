const BenefitesController = require('../app/Controllers/BenefitesController');
const categoryController = require('../app/Controllers/categoryController');
const ProductsController = require('../app/Controllers/ProductsController');
const SlugController = require('../app/Controllers/SlugController');
const SotreCategoryController = require('../app/Controllers/SotreCategoryController');
const StoreController = require('../app/Controllers/StoreController');
const StoreManagerController = require('../app/Controllers/StoreManagerController');
const TagController = require('../app/Controllers/TagController');


module.exports = (src) => {
 
  //StoreController
  src.post("/store/add", StoreController.add);
  src.post("/store/delete", StoreController.delete);
  src.post("/store/update", StoreController.update);
  src.post("/store/read", StoreController.read);


  //StoreManagerController
  src.post("/store/maneger/add", StoreManagerController.add);
  src.post("/store/maneger/delete", StoreManagerController.delete);
  src.post("/store/maneger/update", StoreManagerController.update);
  src.post("/store/maneger/read", StoreManagerController.read);

  //category
  src.post("/category/add", categoryController.add);
  src.post("/category/delete", categoryController.delete);
  src.post("/category/update", categoryController.update);
  src.post("/category/read", categoryController.read);
  
  //tag
  src.post("/tag/add", TagController.add);
  src.post("/tag/delete", TagController.delete);
  src.post("/tag/update", TagController.update);
  src.post("/tag/read", TagController.read);

  //slug
  src.post("/slug/add", SlugController.add);
  src.post("/slug/delete", SlugController.delete);
  src.post("/slug/update", SlugController.update);
  src.post("/slug/read", SlugController.read);


  //products
  src.post("/products/add", ProductsController.add);
  src.post("/products/delete", ProductsController.delete);
  src.post("/products/update", ProductsController.update);
  src.post("/products/read", ProductsController.read);


  // store category controller operations 
  src.post("/store/category/add", SotreCategoryController.add);
  src.post("/store/category/update",SotreCategoryController.update);
  src.post("/store/category/read",SotreCategoryController.read);
  src.post("/store/category/delete",SotreCategoryController.delete);

  // store Benefites controller operations 
  src.post("/store/benefites/add", BenefitesController.add);
  src.post("/store/benefites/update",BenefitesController.update);
  src.post("/store/benefites/read",BenefitesController.read);
  src.post("/store/benefites/delete",BenefitesController.delete);

  
  };

