/*
 * GET to home page
 * returns upcoming event
 */
exports.upcoming = function(req, res){
  // TODO: replace hardcoded with something like the following:
  // var event = Event.findUpcoming();
  var fights = [];
  fights.push({
    division: 'Middleweight',
    fighters: [ 'Ronda Rousey', 'Sara McMann' ]
  });
  fights.push({
    division: 'Heavyweight',
    fighters: [ 'Daniel Cormier', 'Patrick Cummins' ]
  });

  var event = { fights: fights, title: 'UFC 170' };

  res.render('upcoming', { event: event });
}
