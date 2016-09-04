'use strict';
const mongoose = require('mongoose');
const Card = require('./card');
const schema = new mongoose.Schema({
  furtherReading: String
});

module.exports = Card.discriminator('TrainingCard', schema);

