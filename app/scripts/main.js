/*global pnote, $*/


window.Pnote = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    console.log('Hello from Backbone!');
  },
  ex01: function (contact) {
    'use strict';
    console.log(JSON.stringify(contact, null, 2));
  }
};

$(document).ready(function () {
  'use strict';
  Pnote.init();
  var noteCollection = new Pnote.Collections.Note([{
    title: 'test1',
    body: 'testbody'
  }, {
    title: 'test2',
    body: 'tesbody'
  }]);
  var noteListView = new Pnote.Views.NoteList({
    collection: noteCollection
  })

  var mainContainer = new Pnote.Views.Container({
    el: '#main-container'
  })
  mainContainer.show(noteListView);
});
