var app = app || {};

(function($){
  'use strict';

  // Entry point for the app.
  app.FightsView = Backbone.View.extend({
    el: 'ul.fights',
    tagName: 'li',
    events: {
      'click button': function (e) {
        e.preventDefault();
        e.stopPropagation();
        // TODO: create a new pick.

        var form = $(e.target).parents('form');
        console.log(form.serialize());

        var that = this;
        $.ajax('/upcomingFights', form.serialize()).done(function () {
          console.log('triggered ?')
          console.log('collection: ' + that.collection);
          that.collection.add([])
        });

        return console.log('POST to /picks');
      }
    },

    initialize: function () {
      this.collection = new app.UpcomingFights();
      this.collection.on('reset', this.render, this);
      this.collection.on('add', this.renderRecentPick, this);

      this.collection.fetch({ reset: true });
    },

    // Why doesn't this work without being wrapped inside a function ?
    template: function(attrs) {
      return _.template($('#fight-division').text(), attrs);
    },

    renderRecentPick: function () {
      console.log('show success');
      //TODO: append to the tail of the list
    },

    render: function (reset) {
      var that = this;
      this.collection.forEach(function (fight) {
        that.$el.append(that.template(fight.toJSON()));
      })
      return this;
    }
  })

})(jQuery);
