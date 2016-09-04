'use strict';
var mongoose = require('mongoose');

module.exports = mongoose.model('Card', {
  type: { type: String, enum: ['Feature', 'Training'], },
  title: String,
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Done', 'Skipped'],
    default: 'Not Started'
  },
  storyPoints: Number,
  task: String,
  acceptanceCriteria: String,
  furtherReading: String,
  prerequisites: [{type: mongoose.Schema.Types.ObjectId, ref: 'Card'}],
  preparation: String,
  guidance: String,
  hints: [String],
  updatedAt: Date
});
