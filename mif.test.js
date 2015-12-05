var mif = require('./src/parsers/mif.js')
  , fs  = require('fs')
  ;

fs.readFile('example.mif', 'utf8', function (err, data) {
  if (err) throw err;

  console.log(JSON.stringify(mif.parse(data.replace(/\r/g, ''))));
  process.exit();
});