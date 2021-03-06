const passport = require('passport');
const User = require('../models/User');

// beveiligd routes
passport.use(User.createStrategy());
//user to string or readed out of session
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//webtokens JWT
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'mysecretword';

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.uid}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));