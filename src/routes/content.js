const ActivityTypeController = require("../app/Controllers/ActivityTypeController");
const ContentActivityController = require("../app/Controllers/ContentActivityController");
const HolidayController = require("../app/Controllers/HolidayController");
const personalsController = require("../app/Controllers/personalsController");



module.exports = (src) => {
 
  //personals operations
  src.post("/personals/add", personalsController.add);
  src.post("/personals/update",personalsController.update);
  src.post("/personals/read",personalsController.read);
  src.post("/personals/delete",personalsController.delete);

  //holiday operations
  src.post("/holiday/add", HolidayController.add);
  src.post("/holiday/update",HolidayController.update);
  src.post("/holiday/read",HolidayController.read);
  src.post("/holiday/delete",HolidayController.delete);
  
  //contentActivity operations
  src.post("/contentActivity/add", ContentActivityController.add);   // because we dont need to delete or update any operations so just add read will
  src.post("/contentActivity/read",ContentActivityController.read);  // enough for this controller. ******  OSID ******
  
  //activityType operations
  src.post("/activityType/get",ActivityTypeController.get);  

  
  
  };

