// package metadata file for Meteor.js

var packageName = 'geobootstrap:geo-bootstrap';  // http://atmospherejs.com/geobootstrap/geo-bootstrap
var where = 'client';  // where to install: 'client', 'server', or ['client', 'server']

var packageJson = JSON.parse(Npm.require("fs").readFileSync('package.json'));

Package.describe({
  name: packageName,
  summary: 'A timeless Twitter Bootstrap theme built for the modern web',
  version: packageJson.version + '_2',
  git: 'https://github.com/thomasvanlankveld/geo-bootstrap.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.1');
  api.addFiles([
    'img/flames.gif',
    'img/glyphicons-halflings-white.png',
    'img/glyphicons-halflings.png',
    'img/microfab.gif',
    'img/progress.gif',
    'img/rainbow.gif',
    'img/stars.gif',

    'swatch/bootstrap.css'
  ], where);
});
