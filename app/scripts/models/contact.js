/*global Pnote, Backbone*/

Pnote.Models = Pnote.Models || {};

(function () {
  'use strict';

  Pnote.Models.Contact = Backbone.Model.extend({

    url: '',

    initialize: function() {
    },

    defaults: {
      firstname: '',
      lastname: '',
      email: ''
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();
