'use strict';
const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  title: String,
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Done', 'Skipped'],
    default: 'Not Started'
  },
  storyPoints: { type: Number, default: 1 },
  task: String,
  acceptanceCriteria: String,

  updatedAt: Date
});

module.exports = mongoose.model('Card', schema);
