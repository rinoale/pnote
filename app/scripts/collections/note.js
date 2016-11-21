/*global Pnote, Backbone*/

Pnote.Collections = Pnote.Collections || {};

(function () {
  'use strict';

  Pnote.Collections.Note = Backbone.Collection.extend({

    localStorage: new Store('Notes'),
    model: Pnote.Models.Note

  });

})();
