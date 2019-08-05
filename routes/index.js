var express = require('express');
var router = express.Router();
var passport = require('passport')
var User = require('../models/user');

// Browsers serve pages using the GET request
router.get('/', (req, res) => res.render('landing'));

/* ==========================================================================
                        AUTHORIZATION ROUTES
   ========================================================================== */

// REGISTER SHOW ROUTE
router.get('/register', (req,res) => res.render('register'));

// REGISTER NEW ROUTE
router.post('/register',(req,res) => {
    var newUser = new User({username: req.body.username});

    User.register(newUser, req.body.password, (err,user)=>{
        if(err){
            // Error occurs in registration
            // req.flash('error',err.message);
            console.log(err);
            return res.render('register');
        }else{
            passport.authenticate('local')(req,res, () => {
                // When user is registered successfully
                req.flash('success',user.username+', congrats on being Rooted In Nature');
                res.redirect('/plants');
            });
        }
    })
})

// LOGIN SHOW ROUTE - Uses flash message error 
router.get('/login', (req, res) => res.render('login'));

// LOGIN POST ROUTE
router.post('/login', passport.authenticate('local',
    {
        successRedirect: '/',
        failureRedirect: '/login'
    }
), (req, res)=>{});

// LOGOUT ROUTE
router.get('/logout', function (req, res) {
    req.logout();
    req.flash('success', 'logged you out!');
    res.redirect('/plants');
    
});


module.exports = router;