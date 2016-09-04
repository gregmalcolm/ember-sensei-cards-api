'use strict';
const mongoose = require('mongoose');

module.exports = function(Card, CardSchema) {
  var schema = new CardSchema({
    furtherReading: String
  });

  return Card.discriminator('TrainingCard', schema);
};
