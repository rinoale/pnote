/*global pnote, $*/


window.Pnote = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    console.log('Hello from Backbone!');

    var noteCollection = new Pnote.Collections.Note([{
      title: 'test1',
      body: 'testbody'
    }, {
      title: 'test2',
      body: 'tesbody'
    }]);

    noteCollection.each(function(note) {
      note.save();
    })

    return noteCollection.models;
  }
};

$(document).ready(function () {
  'use strict';
  Pnote.noteCollection = new Pnote.Collections.Note();

  Pnote.mainContainer = new Pnote.Views.Container({
    el: '#main-container'
  });

  Pnote.headerContainer = new Pnote.Views.Container({
    el: '#header-container'
  });

  Pnote.noteCollection.fetch().then(function(notes) {
    if (notes.length === 0) {
      var models = Pnote.init();
      Pnote.noteCollection.reset(models);
    }

    Pnote.noteRouter = new Pnote.Routers.Note();
    Backbone.history.start();
  })
});
