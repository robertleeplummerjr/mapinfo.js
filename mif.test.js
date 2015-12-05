var mif = require('./mif.js')
  , fs  = require('fs')
  ;

fs.readFile('example.mif', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  data = data.replace(/\r/g, '');
  console.log(JSON.stringify(mif.parse(data)));
  process.exit();
});