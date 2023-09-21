var fs = require('fs');
fs.Stats('input.txt', function (err, stats) { 
       if (err) {
              console.log(err);
       }
       console.log(stats);
});