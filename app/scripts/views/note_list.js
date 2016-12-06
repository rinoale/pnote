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
      this.listenTo(this.collection, 'reset', this.render);
    },

    render: function () {
      this.$el.html(this.template);
      this.noteViews = this.collection.map(function(note) {
        var noteView = new Pnote.Views.Note({
          model: note
        });
        this.$('#noteList').append(noteView.render().$el);
        return noteView;
      }, this);
      return this;
    },

    removeNoteViews: function() {
      _.invoke(this.noteViews, 'remove');
    }

  });

})();
