var express = require('express');
var app = express();
const expressServer = require("./src/config/express");

require('dotenv').config();





expressServer.listen(process.env.PORT || 3000, function () {
    console.log("Express server listening on port %s" ,process.env.PORT || 3000);
});


