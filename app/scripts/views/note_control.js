/*global Pnote, Backbone, JST*/

Pnote.Views = Pnote.Views || {};

(function () {
  'use strict';

  Pnote.Views.NoteControl = Backbone.View.extend({

    template: JST['app/scripts/templates/note_control.ejs'],

    events: {
      'submit .js-search-form': 'onSubmit'
    },

    onSubmit: function(e) {
      e.preventDefault();
      var query = this.$('.js-search-query').val();
      this.trigger('submit:form', query);
    },

    render: function () {
      this.$el.html(this.template);
      return this;
    }

  });

})();
