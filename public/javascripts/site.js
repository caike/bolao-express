var UpcomingFights = Backbone.Collection.extend({
  url: '/upcomingFights',
})

var FightsView = Backbone.View.extend({
  el: 'ul.fights',
  tagName: 'li',
  events: {
    'click': function () {
      // TODO: create a new pick.
      return alert('POST to /picks');
    }
  },

  initialize: function () {
    this.collection.on('reset', this.render, this);
  },

  // Why doesn't this work without being wrapped inside a function ?
  template: function(attrs) {
    return _.template($('#fight-division').text(), attrs);
  },

  render: function () {
    var that = this;
    this.collection.forEach(function (fight) {
      that.$el.append(that.template(fight.toJSON()));
    })
    return this;
  }
})


$(function () {
  var upcomingFights = new UpcomingFights();
  var view = new FightsView({ collection: upcomingFights });
  upcomingFights.fetch({ reset: true })
})
