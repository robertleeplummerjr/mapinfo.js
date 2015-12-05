var fs      = require('fs')
  , Promise = require('promise')
  , exec    = require('child_process').exec
  , jobs    = [
      function (next) {
        process.chdir('./src/parsers');
        exec('jison mid.jison', function (err, data) {
          if (err) throw err;
          console.log(data);
          next();
        })
      },
      function (next) {
        exec('jison mif.jison', function (err , data) {
          if (err) throw err;
          console.log(data);
          next();
        })
      },
      function (next) {
        fs.readFile('mid.js', 'utf8', function (err, data) {
          if (err) throw err;
          setTimeout(next, 0);
          jobResults.push(data);
        });
      },
      function (next) {
        fs.readFile('mif.js', 'utf8', function (err, data) {
          if (err) throw err;
          setTimeout(next, 0);
          jobResults.push(data);
        })
      },
      function (next) {
        process.chdir('../MapInfo/');
        fs.readFile('MapInfo.js', 'utf8', function(err, data) {
          if (err) throw err;
          setTimeout(next, 0);
          jobResults.push(data);
        });
      },
      function (mid, mif, mapInfo) {
        process.chdir('../../');
        mapInfo = mapInfo
            .replace('/*mid*/var parser;/**/', mid)
            .replace('/*mif*/var parser;/**/', mif);

        fs.writeFile('index.js', mapInfo, function(err) {
          if(err) throw err;
          console.log('index.js created');
          process.exit();
        });
      }
    ]
  , jobResults = []
  ;

function jobRun() {
  if (jobs.length > 1) {
    jobs.shift()(jobRun);
  } else if (jobs.length === 1) {
    jobs.shift().apply(null, jobResults);
  }
}

jobRun();