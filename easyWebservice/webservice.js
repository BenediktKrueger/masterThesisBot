var request = require('request');

var main = function(msg) {

 
  // return a promise
  return new Promise(function(resolve, reject) {
    
    request('http://stackabuse.com', function(err, res, body) {  
        console.log(body);
        return resolve(body);
    });

  });
};