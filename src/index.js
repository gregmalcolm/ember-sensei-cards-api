'use strict';
const path = require('path');
const express = require('express');
const jsonApi = require('json-api');
const jsonApiError = jsonApi.types.Error;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ember-sensei-cards');


const models = {
  // Sensei Cards
  Card: require('./models/sensei-cards/card'),
  //FeatureCard: require('./models/sensei-cards/feature-card'),
  //TrainingCard: require('./models/sensei-cards/training-card')

  // Movies
}

const adapter = new jsonApi.dbAdapters.Mongoose(models);
const registry = new jsonApi.ResourceTypeRegistry({
  cards: require('./resource-descriptions/sensei-cards/cards')
}, { dbAdapter: adapter });

const controller = new jsonApi.controllers.API(registry);
const docs = new jsonApi.controllers.Documentation(registry, {name: 'Ember Sensei Stories API'});
const app = express();
const front = new jsonApi.httpStrategies.Express(controller, docs);
const apiReqHandler = front.apiRequest.bind(front);

// Enable CORS. Note: if you copy this code into production, you may want to
// disable this. See https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
app.use(function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  next();
})

//routes
app.get("/", front.docsRequest.bind(front));
app.route("/sensei-cards/:type(cards)")
  .get(apiReqHandler).post(apiReqHandler).patch(apiReqHandler);
app.route("/sensei-cards/:type(cards)/:id")
  .get(apiReqHandler).patch(apiReqHandler).delete(apiReqHandler);
app.route("/sensei-cards/:type(cards)/:id/relationships/:relationship")
  .get(apiReqHandler).post(apiReqHandler).patch(apiReqHandler).delete(apiReqHandler);

app.use(function(req, res, next) {
  front.sendError(new jsonApiError(404, undefined, 'Not Found'), req, res);
});

console.log("Starting an ember-sensei-cards API server on http://localhost:5000");
app.listen(5000);
