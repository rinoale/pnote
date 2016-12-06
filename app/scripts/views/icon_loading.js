/*global Pnote, Backbone, JST*/

Pnote.Views = Pnote.Views || {};

(function () {
  'use strict';

  Pnote.Views.IconLoading = Backbone.View.extend({

    template: JST['app/scripts/templates/icon_loading.ejs'],

    initialize: function () {
    },

    render: function () {
      this.$el.html(this.template);
      return this;
    }

  });

})();
