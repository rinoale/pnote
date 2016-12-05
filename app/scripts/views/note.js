/*global Pnote, Backbone, JST*/

Pnote.Views = Pnote.Views || {};

(function () {
  'use strict';

  Pnote.Views.Note = Backbone.View.extend({

    template: JST['app/scripts/templates/note.ejs'],

    tagName: 'tr',

    id: '',

    className: '',

    events: {
      'click .js-delete': 'onClickDelete'
    },

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    onClickDelete: function() {
      this.model.destroy();
    }
  });

})();
