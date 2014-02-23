var app = app || {};

(function ($) {
  'use strict';

  app.UpcomingFights = Backbone.Collection.extend({
    url: '/upcomingFights',
  });

})(jQuery);

