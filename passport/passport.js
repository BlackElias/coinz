const passport = require('passport');
const User = require('../models/User');

// beveiligd routes
passport.use(User.createStrategy());
//user to string or readed out of session
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());