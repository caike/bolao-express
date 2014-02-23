/*
 * GET to home page
 * returns upcoming event
 */
exports.upcoming = function(req, res){
  var event = { title: 'UFC 170' },
      userName = null;

  if(req.isAuthenticated()){
    userName = req.user.displayName;
  }

  res.render('upcoming', { event: event, userName: userName });
}

exports.upcomingFights = function (req, res) {
  // TODO: replace hardcoded with something like the following:
  // var event = Event.findUpcoming();
  var fights = [];
  fights.push({
    id: 1,
    division: 'Bantamweight',
    fighters: [ 'Ronda Rousey', 'Sara McMann' ]
  });
  fights.push({
    id: 2,
    division: 'Heavyweight',
    fighters: [ 'Daniel Cormier', 'Patrick Cummins' ]
  });
  fights.push({
    id: 3,
    division: 'Welterweight',
    fighters: [ 'Rory McDonald', 'Demian Maia' ]
  });

  res.send(200, fights);
}
