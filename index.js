// Need access to the filesystem
var fs = require('fs')
// Lodash for templating. This could be swapped out by something else
var _ = require('lodash')
// Used to turn the filesize into a human readable format
var filesize = require('filesize')
var cssstats = require('cssstats')
var getcss = require('get-css')


var allFontSizes = []

var options = {
  timeout: 5000
};

var github = cssstats(fs.readFileSync('./data/github.css', 'utf8'))
var pinterest = cssstats(fs.readFileSync('./data/pinterest.css', 'utf8'))
var mapbox = cssstats(fs.readFileSync('./data/mapbox.css', 'utf8'))
var bluebottlecoffee = cssstats(fs.readFileSync('./data/bluebottlecoffee.css', 'utf8'))
var instagram = cssstats(fs.readFileSync('./data/instagram.css', 'utf8'))
var etsy = cssstats(fs.readFileSync('./data/etsy.css', 'utf8'))
var apple = cssstats(fs.readFileSync('./data/apple.css', 'utf8'))
var kickstarter = cssstats(fs.readFileSync('./data/kickstarter.css', 'utf8'))
var twitter = cssstats(fs.readFileSync('./data/twitter.css', 'utf8'))
var tumblr = cssstats(fs.readFileSync('./data/tumblr.css', 'utf8'))
var soundcloud = cssstats(fs.readFileSync('./data/soundcloud.css', 'utf8'))
var stripe = cssstats(fs.readFileSync('./data/stripe.css', 'utf8'))
var bbc = cssstats(fs.readFileSync('./data/bbc.css', 'utf8'))

var githubTypeScale = _.uniq(github.declarations.getAllFontSizes()).length
allFontSizes.push(githubTypeScale)
var twitterTypeScale = _.uniq(twitter.declarations.getAllFontSizes()).length
allFontSizes.push(twitterTypeScale)
var stripeTypeScale = _.uniq(stripe.declarations.getAllFontSizes()).length
allFontSizes.push(stripeTypeScale)

var sum = allFontSizes.reduce(function(a, b) { return a + b; });
var avg = sum / allFontSizes.length;

console.log("Twitter has " + twitterTypeScale)
console.log("GitHub has " + githubTypeScale)
console.log("Stripe has " + stripeTypeScale)
console.log("This averages out to be " + avg + " font-sizes per website")

// These are templates for nav partials you can add site wide nav to.
// Would be easy to extend this to document things in a modular fashion.
var siteFooter = fs.readFileSync('./templates/footer.html', 'utf8')
var siteNav = fs.readFileSync('./templates/nav.html', 'utf8')

// Where the base lodash template lives
var template = fs.readFileSync('./templates/index.html', 'utf8')
var tpl = _.template(template)
var html = tpl({
})

// File to write too, this is configurable
fs.writeFileSync('./index.html', html)
