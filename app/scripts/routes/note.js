/*global Pnote, Backbone*/

Pnote.Routers = Pnote.Routers || {};

(function () {
  'use strict';

  Pnote.Routers.Note = Backbone.Router.extend({
    routes: {
      'notes/:id': 'showNoteDetail',
      'new': 'showNewNote',
      'notes/:id/edit': 'showEditNote',
      'notes/search/:query': 'searchNote',
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

    showNoteList: function(models) {
      if (!this.filteredCollection) {
        this.filteredCollection = new Pnote.Collections.Note();
      }

      if (!Pnote.mainContainer.has(Pnote.Views.NoteList)) {
        var noteListView = new Pnote.Views.NoteList({
          collection: this.filteredCollection
        });
        Pnote.mainContainer.show(noteListView);
      }

      models = models || Pnote.noteCollection.models;

      this.filteredCollection.reset(models);
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

    searchNote: function(query) {
      var filtered = Pnote.noteCollection.filter(function(note) {
        return note.get('title').indexOf(query) !== -1;
      });
      this.showNoteList(filtered);
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
    },

    showEditNote: function(id) {
      var self = this;

      var note = Pnote.noteCollection.get(id);
      var noteFormView = new Pnote.Views.NoteForm({
        model: note
      });

      noteFormView.on('submit:form', function(attrs) {
        note.save(attrs);

        self.showNoteDetail(note.get('id'));
        self.navigate('notes/' + note.get('id'));
      });

      Pnote.mainContainer.show(noteFormView);
    }
  });

})();
