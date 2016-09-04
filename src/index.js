'use strict';
var path = require('path');
var express = require('express');
var jsonApi = require('json-api');
var jsonApiError = jsonApi.types.Error;
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ember-sensei-cards');


var models = {
  card: require('./models/sensei-cards/card'),
}

var adapter = new jsonApi.dbAdapters.Mongoose(models);
var registry = new jsonApi.ResourceTypeRegistry({
  // TODO: implement resources-descriptions
}, { dbAdapter: adapter });

var controller = new jsonApi.controllers.API(registry);
var docs = new jsonApi.controllers.Documentation(registry, {name: 'Ember Sensei Stories API'});
var app = express();
var front = new jsonApi.httpStrategies.Express(controller, docs);
var apiReqHandler = front.apiRequest.bind(front);

// Enable CORS. Note: if you copy this code into production, you may want to
// disable this. See https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
app.use(function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  next();
})

//routes
app.get("/", front.docsRequest.bind(front));
//TODO: Routes

app.use(function(req, res, next) {
  front.sendError(new jsonApiError(404, undefined, 'Not Found'), req, res);
});

console.log("Starting an ember-sensei-cards API server on http://localhost:5000");
app.listen(5000);
