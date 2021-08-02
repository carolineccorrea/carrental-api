import * as passport from 'passport';
import * as PassportStrategy from 'passport-local'
import User from '../model/User';
import bcrypt from 'bcryptjs';
// const passport = require('passport')
// const localStatregy = require('passport-local').Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(() => {
    User.findById(id, (err, user) => {
        done(err, user)
    })
})

passport.use(
    new localStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, (email, password, done) => {
        User.findOne({ email: email })
        then((user) => {
            if (!user) {
                return done(null, false)
            }
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) {
                    return done(err)
                }
                if (isMatch) {
                    return done(null, user)
                }
                else {
                    return done(null, false)
                }
            });

        }).catch((err) => {
            console.log(err);
        })
    }
    )
)