var mid = require('./src/parsers/mid.js')
  , fs  = require('fs')
  ;

fs.readFile('example.mid', 'utf8', function (err, data) {
  if (err) throw err;

  console.log(JSON.stringify(mid.parse(data.replace(/\r/g, ''))));
  process.exit();
});