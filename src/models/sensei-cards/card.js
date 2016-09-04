'use strict';
const mongoose = require('mongoose');
const utils = require('../../lib/utils');

const CardSchema = function CardSchema() {
  mongoose.Schema.apply(this, arguments);
  this.add({
    title: String,
    //status: {
      //type: String,
      //enum: ['Not Started', 'In Progress', 'Done', 'Skipped'],
      //default: 'Not Started'
    //},
    //storyPoints: { type: Number, default: 1 },
    //task: String,
    //acceptanceCriteria: String,

    //updatedAt: Date
  });
};
utils.inherit(CardSchema, mongoose.Schema);
const schema = new CardSchema();

module.exports = {
  model: mongoose.model('Card', schema),
  schema: CardSchema
};
