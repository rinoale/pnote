/*global Pnote, Backbone, JST*/

Pnote.Views = Pnote.Views || {};

(function () {
  'use strict';

  Pnote.Views.NoteList = Backbone.View.extend({

    template: JST['app/scripts/templates/note_list.ejs'],

    tagName: 'table',

    id: '',

    className: 'table',

    events: {},

    initialize: function (options) {
      this.collection = options.collection;
    },

    render: function () {
      this.$el.html(this.template);
      this.collection.each(function(note) {
        var noteView = new Pnote.Views.Note({
          model: note
        });
        this.$('#noteList').append(noteView.render().$el);
      }, this);
      return this;
    }

  });

})();
