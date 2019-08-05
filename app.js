var express       = require('express'),
    app           = express(),
    mongoose      = require('mongoose'), // npm install mongoose --save

    bodyParser    = require('body-parser'),

// PASSPORT IMPORTS
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    flash = require('connect-flash');

// METHOD-OVERRIDE
var methodOverride = require('method-override');

// ROUTE IMPORTS
var indexRoutes   = require('./routes/index'),
    plantRoutes   = require('./routes/plants'),
    commentRoutes = require('./routes/comments'),
  //  blogCommentRoutes = require('./routes/blogcomments')
    blogRoutes    = require('./routes/blogs');

// SCHEMA MODEL IMPORTS
var Plant = require('./models/plant');
var Comment = require('./models/comment');
var User    = require('./models/user');
var Blog    = require('./models/blog');

// IMPORT SEED
var plantSeedDB = require('./plantSeed.js');
var blogSeedDB = require('./blogSeed.js')

// FLASH SETUP - makes sure comes before passport configuration
app.use(flash());


/*************************** PASSPORT CONFIGURATION ******************************/

// SESSION
/* Makes HTTTP not stateless and saves info about user secretly
 * If user not logged in then cant see secret pages
 * Saves session data in cookie (piece of data sent to users browser, tells if requests
 * came from the same server)
 * express-session creates session object with unique key where data is stored
 *      - request.sessionID will return ID
 */
app.use(require('express-session')({
    secret: 'You are the coolest',
    resave: false,
    saveUninitialized: false
}));



app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

// Read session, take data from session thats encoded and unencode it(deserialize), 
//serialize will re encode it, serialize and put back in the session
// passportLocalMongoose contains these methods
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// APPLY currentUser FROM PLANT INDEX ROUTE TO ALL ROUTES SINCE IN HEADER
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    // Set up locals for error and message
    res.locals.error = req.flash('error');
    res.locals.success = req.flash("success");
    next(); // This moves to the next middleware route
});

// METHOD-OVERRIDE
app.use(methodOverride('_method'));

// CONNECT THE DATABASE RUNNING ON DEFAULT PORT 27017
mongoose.connect("mongodb://localhost:27017/rin_practice"),{ useNewUrlParser: true }; 

// USE BODY PARSER TO GET FORM BODY
app.use(bodyParser.urlencoded({
    extended: true
}));

// PREVENTS ANY BACKLASH FROM DIRECTORY CHANGES
app.use(express.static(__dirname + "/public"));

// SET VIEW ENGINE
app.set('view engine', 'ejs'); // Couldnt remember this

// ROUTE INTEGRATION
app.use('/',indexRoutes);
app.use('/plants',plantRoutes);
app.use('/', commentRoutes);
// app.use('/', blogCommentRoutes)
app.use('/blogs',blogRoutes);

// CALL SEED
// plantSeedDB();
// blogSeedDB();

let port = process.env.PORT;
// In this case, the server will listen on port 8000 if the PORT environment variable isn’t set.
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);