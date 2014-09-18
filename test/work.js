var fs = require('fs');
var reload = require('../');
var data = reload('./data');

// print data from module every sec
setInterval(function() {
    console.log(data.name);
}, 1000);

// update file every 5 secs
setInterval(function() {
	console.log('update!')
    var data = '{ "name":"' + random(100000, 999999) + '" }';
    fs.writeFile('./data.json', data);
}, 5000);

var random = function(min, max) {
    var range = max - min;
    var rand = Math.random();
    return (min + Math.round(rand * range));
};

/*
todo 

var include = require('../');
var data = include('./data');
data.update();

*/