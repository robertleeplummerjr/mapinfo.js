var MapInfo = require('./index')
  , fs      = require('fs')
  ;

fs.readFile('example.mid', 'utf8', function (err, midString) {
  if (err) throw err;
  fs.readFile('example.mif', 'utf8', function (err, mifString) {
    if (err) throw err;

    var mapInfo = new MapInfo({
      midString: midString,
      mifString: mifString
    });

    console.log(JSON.stringify(mapInfo.toGeoJSON()));
    process.exit();
  });
});