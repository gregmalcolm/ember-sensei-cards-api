'use strict';
module.exports = {
  parentType: "cards",
  urlTemplates: {
    "self": "http://127.0.0.1:3000/sensei-cards/feature-cards/{id}",
    "relationship": "http://127.0.0.1:3000/sensei-cards/feature-cards/{ownerId}/relationships/{path}"
  },

  info: {
    "description": "Feature Cards",
  }
}
