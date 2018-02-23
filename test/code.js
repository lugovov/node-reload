const reload = require('../');
const data = reload('./data.js');

// print data from module every sec
setInterval(function() {
  console.log(new Date, data.time);
}, 1000);

// If you update the `time` in data.js
// the output will change immediately
