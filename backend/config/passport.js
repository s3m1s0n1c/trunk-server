/* Initializing PassportJS */
var User = require("../models/user");
var local = require("./passport-strategies/local");

module.exports =function (app, passport) {
  // Configure Passport authenticated session persistence.
  //
  // In order to restore authentication state across HTTP requests, Passport needs
  // to serialize users into and deserialize users out of the session.  The
  // typical implementation of this is as simple as supplying the user ID when
  // serializing, and querying the user record by ID from the database when
  // deserializing.
  passport.serializeUser((user, done) => {
  	done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
  	User.findById(id, (err, user) => {
  		done(err, user)
  	})
  })

  // use the following strategies
  passport.use(local)
}
