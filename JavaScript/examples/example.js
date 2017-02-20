'use strict';

global.api = {};
api.fs = require('fs');

api.fs.readFile('example.js', (err, data) => {
  if (err) return console.error(err);
  console.log(data.toString());
});
