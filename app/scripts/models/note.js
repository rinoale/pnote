/*global Pnote, Backbone*/

Pnote.Models = Pnote.Models || {};

(function () {
  'use strict';

  Pnote.Models.Note = Backbone.Model.extend({

    url: '',

    initialize: function() {
    },

    defaults: {
      title: '',
      body: '',
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();
