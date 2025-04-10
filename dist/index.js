'use strict';

var dotenv = require('dotenv');
dotenv.config();
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/health', function (req, res) {
  res.status(200).json({
    status: "ok",
    env: process.env.NODE_ENV || "development"
  });
});

if (require.main === module) {
  app.listen(port, function () {
    console.log('Server running on port ' + port);
  });
}

module.exports = app;