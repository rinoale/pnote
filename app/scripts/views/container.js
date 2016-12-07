/*global Pnote, Backbone, JST*/

Pnote.Views = Pnote.Views || {};

(function () {
  'use strict';

  Pnote.Views.Container = Backbone.View.extend({

    show: function(view) {
      var iconLoading = new Pnote.Views.IconLoading();
      this.destroyView(this.currentView);
      this.$el.append(iconLoading.render().$el);
      this.currentView = iconLoading;

      setTimeout(() => {
        this.destroyView(this.currentView);
        this.$el.append(view.render().$el);
        this.currentView = view;
      }, 2000);
    },

    destroyView: function(view) {
      if(!view) {
        return;
      }
      view.off();
      view.remove();
    },
    
    empty: function() {
      this.destroyView(this.currentView);
      this.currentView = null;
    },

    has: function(obj) {
      return this.currentView instanceof obj;
    }

  });

})();
