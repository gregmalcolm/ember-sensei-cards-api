'use strict';
const mongoose = require('mongoose');

module.exports = function(Card, CardSchema) {
  var schema = new CardSchema({
    prerequisites: [
      {type: mongoose.Schema.Types.ObjectId, ref: 'Card'}
    ],
    preparation: String,
    guidance: String,
    hints: [{type: String}]
  });

  return Card.discriminator('FeatureCard', schema);
};
