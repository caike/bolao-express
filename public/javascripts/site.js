var UpcomingFights = Backbone.Collection.extend({
  url: '/upcomingFights',
})

var FightsView = Backbone.View.extend({
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
    this.collection.on('reset', this.render, this);
    this.collection.on('add', this.renderRecentPick, this);
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


var app = app || {};

$(function () {
  //var upcomingFights = new UpcomingFights();
  //var view = new FightsView({ collection: upcomingFights });
  //upcomingFights.fetch({ reset: true });
  //view.render();
  new app.AppView();
})
