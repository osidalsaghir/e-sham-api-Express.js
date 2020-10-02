const BenefitesController = require('../app/Controllers/BenefitesController');
const categoryController = require('../app/Controllers/categoryController');
const ProductsController = require('../app/Controllers/ProductsController');
const SlugController = require('../app/Controllers/SlugController');
const SotreCategoryController = require('../app/Controllers/SotreCategoryController');
const StoreController = require('../app/Controllers/StoreController');
const StoreManagerController = require('../app/Controllers/StoreManagerController');
const TagController = require('../app/Controllers/TagController');
const CopunContraller = require('../app/Controllers/cuponContraller');
const StoreAddressController = require('../app/Controllers/StoreAddressController');
const ImageController = require('../app/Controllers/ImageController');
const SizeController = require('../app/Controllers/SizeController');
const ColorsController = require('../app/Controllers/ColorsController');
const VariantesController = require('../app/Controllers/VariantesController');


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

  //add copuns
  src.post("/Copun/add", CopunContraller.insert);
  src.post("/Copun/update", CopunContraller.delete);
  src.post("/Copun/delete", CopunContraller.update);
  src.post("/Copun/read", CopunContraller.read);


  //address for stores copuns
  src.post("/storeadress/add", StoreAddressController.add);
  src.post("/storeadress/update", StoreAddressController.delete);
  src.post("/storeadress/delete", StoreAddressController.update);
  src.post("/storeadress/read", StoreAddressController.read);

  //address for stores copuns
  src.post("/benefites/add", BenefitesController.add);
  src.post("/benefites/update", BenefitesController.delete);
  src.post("/benefites/delete", BenefitesController.update);
  src.post("/benefites/read", BenefitesController.read);


  //address for stores 
  src.post("/sotrecategory/add", SotreCategoryController.add);
  src.post("/sotrecategory/update", SotreCategoryController.delete);
  src.post("/sotrecategory/delete", SotreCategoryController.update);
  src.post("/sotrecategory/read", SotreCategoryController.read);


  //product images
  src.post("/product/image/add", ImageController.add);
  src.post("/product/image/update", ImageController.delete);
  src.post("/product/image/delete", ImageController.update);
  src.post("/product/image/read", ImageController.read);


  //products size
  src.post("/product/size/add", SizeController.add);
  src.post("/product/size/update", SizeController.delete);
  src.post("/product/size/delete", SizeController.update);
  src.post("/product/size/read", SizeController.read);



  //product color
  src.post("/product/color/add", ColorsController.add);
  src.post("/product/color/update", ColorsController.delete);
  src.post("/product/color/delete", ColorsController.update);
  src.post("/product/color/read", ColorsController.read);




  //product varients
  src.post("/product/variantes/add", VariantesController.add);
  src.post("/product/variantes/update", VariantesController.delete);
  src.post("/product/variantes/delete", VariantesController.update);
  src.post("/product/variantes/read", VariantesController.read);
  
  };

