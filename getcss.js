// Need access to the filesystem
var fs = require('fs')
// Lodash for templating. This could be swapped out by something else
var _ = require('lodash')
// Used to turn the filesize into a human readable format
var filesize = require('filesize')
var cssstats = require('cssstats')
var getcss = require('get-css')


var options = {
  timeout: 5000
};

var github = getcss('http://github.com', options)
  .then(function(response) {
    fs.writeFileSync('./data/github.css', response.css)
  })
  .catch(function(error) {
     console.log("Can't get css because" + error)
  });

var pinterest = getcss('https://pinterest.com', options)
  .then(function(response) {
    fs.writeFileSync('./data/pinterest.css', response.css)
  })
  .catch(function(error) {
     console.log("Can't get css because" + error)
  });

var pinterest = getcss('http://mapbox.com', options)
  .then(function(response) {
    fs.writeFileSync('./data/mapbox.css', response.css)
  })
  .catch(function(error) {
     console.log("Can't get css because" + error)
  });

var bluebottlecoffee = getcss('http://bluebottlecoffee.com', options)
  .then(function(response) {
    fs.writeFileSync('./data/bluebottlecoffee.css', response.css)
  })
  .catch(function(error) {
     console.log("Can't get css because" + error)
  });


var instagram = getcss('http://instagram.com', options)
  .then(function(response) {
    fs.writeFileSync('./data/instagram.css', response.css)
  })
  .catch(function(error) {
     console.log("Can't get css because" + error)
  });

var etsy = getcss('http://etsy.com', options)
  .then(function(response) {
    fs.writeFileSync('./data/etsy.css', response.css)
  })
  .catch(function(error) {
     console.log("Can't get css because" + error)
  });

var apple = getcss('http://apple.com', options)
  .then(function(response) {
    fs.writeFileSync('./data/apple.css', response.css)
  })
  .catch(function(error) {
     console.log("Can't get css because" + error)
  });

var kickstarter = getcss('http://kickstarter.com', options)
  .then(function(response) {
    fs.writeFileSync('./data/kickstarter.css', response.css)
  })
  .catch(function(error) {
     console.log("Can't get css because" + error)
  });

var twitter = getcss('http://twitter.com', options)
  .then(function(response) {
    fs.writeFileSync('./data/twitter.css', response.css)
  })
  .catch(function(error) {
     console.log("Can't get css because" + error)
  });

var tumblr = getcss('http://tumblr.com', options)
  .then(function(response) {
    fs.writeFileSync('./data/tumblr.css', response.css)
  })
  .catch(function(error) {
     console.log("Can't get css because" + error)
  });

var soundcloud = getcss('http://soundcloud.com', options)
  .then(function(response) {
    fs.writeFileSync('./data/soundcloud.css', response.css)
  })
  .catch(function(error) {
     console.log("Can't get css because" + error)
  });

var stripe = getcss('http://stripe.com', options)
  .then(function(response) {
    fs.writeFileSync('./data/stripe.css', response.css)
  })
  .catch(function(error) {
     console.log("Can't get css because" + error)
  });

var bbc = getcss('http://bbc.com', options)
  .then(function(response) {
    fs.writeFileSync('./data/bbc.css', response.css)
  })
  .catch(function(error) {
     console.log("Can't get css because" + error)
  });
