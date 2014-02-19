/*
 * GET to home page
 * returns upcoming event
 */
exports.upcoming = function(req, res){
  // TODO: replace hardcoded with something like the following:
  // var event = Event.findUpcoming();
  var event = { title: 'UFC 170', fights: [] };

  event.fights.push({
    id: 1,
    division: 'Middleweight',
    fighters: [ 'Ronda Rousey', 'Sara McMann' ]
  });
  event.fights.push({
    id: 2,
    division: 'Heavyweight',
    fighters: [ 'Daniel Cormier', 'Patrick Cummins' ]
  });
  event.fights.push({
    id: 3,
    division: 'Welterweight',
    fighters: [ 'Rory McDonald', 'Demian Maia' ]
  });

  res.render('upcoming', { event: event });
}
