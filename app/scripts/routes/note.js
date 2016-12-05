/*global Pnote, Backbone*/

Pnote.Routers = Pnote.Routers || {};

(function () {
  'use strict';

  Pnote.Routers.Note = Backbone.Router.extend({
    routes: {
      'notes/:id': 'showNoteDetail',
      'new': 'showNewNote',
      '*actions': 'defaultRoute'
    },

    defaultRoute: function() {
      this.showNoteList();
      this.navigate('notes');
    },

    showNoteDetail: function(id) {
      var note = Pnote.noteCollection.get(id);
      var noteDetailView = new Pnote.Views.NoteDetail({
        model: note
      });
      Pnote.mainContainer.show(noteDetailView);
    },

    showNoteList: function() {
      var noteListView = new Pnote.Views.NoteList({
        collection: Pnote.noteCollection
      });

      Pnote.mainContainer.show(noteListView);

      this.showNoteControl();
    },

    showNoteControl: function() {
      var self = this;
      var noteControlView = new Pnote.Views.NoteControl();

      noteControlView.on('submit:form', function(query) {
        self.searchNote(query);
        self.navigate('notes/search/' + query);
      })

      Pnote.headerContainer.show(noteControlView);
    },

    showNewNote: function() {
      var self = this;
      var noteFormView = new Pnote.Views.NoteForm({
        model: new Pnote.Models.Note()
      });

      noteFormView.on('submit:form', function(attrs) {
        Pnote.noteCollection.create(attrs);

        self.showNoteList();
        self.navigate('notes');
      });

      Pnote.mainContainer.show(noteFormView);

      Pnote.headerContainer.empty();
    }
  });

})();
