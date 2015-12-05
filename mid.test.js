var mid = require('./src/parsers/mid.js')
  , fs  = require('fs')
  ;

fs.readFile('example.mid', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  data = data.replace(/\r/g, '');
  console.log(JSON.stringify(mid.parse(data)));
  process.exit();
});