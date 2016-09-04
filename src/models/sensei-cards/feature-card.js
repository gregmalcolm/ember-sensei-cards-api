'use strict';
const mongoose = require('mongoose');
const Card = require('./card');
const schema = new mongoose.Schema({
  //prerequisites: [
    //{type: mongoose.Schema.Types.ObjectId, ref: 'Card'}
  //],
  //preparation: String,
  //guidance: String,
  //hints: [String]
});

module.exports = Card.discriminator('FeatureCard', schema);
