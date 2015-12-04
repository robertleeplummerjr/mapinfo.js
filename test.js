var mid = require('./mid.js')
  , mif = require('./mif.js')
  , fs  = require('fs')
  ;

fs.readFile('example.mif', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(mif.parse(data));
});