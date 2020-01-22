'use strict';

const fs = require('fs');

fs.readFile('example.js', (err, data) => {
  if (err) return console.error(err);
  console.log(data.toString());
});
