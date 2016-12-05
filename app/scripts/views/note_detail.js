/*global Pnote, Backbone, JST*/

Pnote.Views = Pnote.Views || {};

(function () {
  'use strict';

  Pnote.Views.NoteDetail = Backbone.View.extend({

    template: JST['app/scripts/templates/note_detail.ejs'],

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }

  });

})();
