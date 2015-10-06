// Need access to the filesystem
var fs = require('fs')
// Lodash for templating. This could be swapped out by something else
var _ = require('lodash')
// Used to turn the filesize into a human readable format
var filesize = require('filesize')
var cssstats = require('cssstats')
var getcss = require('get-css')
var removeProtocol = require('remove-protocol')
var urls = require('./urls.json')

var options = {
  timeout: 5000
}

urls.forEach(function (url) {
  getcss(url, options).then(function (response) {
    var domain = removeProtocol(url)
    fs.writeFileSync('./data/' + domain + '.css', response.css)
  })
  .catch(function (error) {
    console.log("Can't get css because" + error)
  })
})
