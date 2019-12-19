var express = require('express');
var router  = express.Router();

// SCHEMA MODEL IMPORTS
var Plant = require('../models/plant');

// IMPORT MIDDLEWARE
var middleware = require('../middleware');

// Import DICTIONARY
let dictionary = require('../public/scripts/plants/dictionary');

/************************ KEYS *********************************/

// IMPORT PLANT KEYS
var fernKey = require('../public/scripts/plant_keys/ferns');

// Used to hold all keys
let keys = { ferns: fernKey };

router.get('/families', (req,res)=>{
    let families = ['Locopodiaceae'];
    res.render('plants/families/index', {families});
});

router.get('/families/:family', (req, res) => {
    res.render('plants/families/family', { family: req.params.family });
});

router.get('/groups', (req,res)=>{
    let groups = ['ferns'];
    res.render('plants/groups/index', {groups});
});

router.get('/groups/:group', (req, res) => {
    res.render('plants/groups/show.ejs', { group: req.params.group });
});


router.get('/keys',(req,res)=>{
    let groups = [{name:'Ferns And Allies', group:'ferns'}]
    res.render('plants/keys/index', {groups})
})
router.get('/keys/:family',(req,res)=>{
    let key_val = req.query.key_val || 01; // Take the query parameter and access the binomial key
    let family = req.params.family;
    let key_obj = keys[family];

    // Get the sentences
    let a_sentence = key_obj['key'][key_val]['a']['sentence'];
    let b_sentence = key_obj['key'][key_val]['b']['sentence'];
    
    // Split sentences into array to loop through
    let split_a_sentence = a_sentence.split(` `);
    let split_b_sentence = b_sentence.split(` `);

    // The final linke to the next place
    let a_result = key_obj['key'][key_val]['a']['result'];
    let b_result = key_obj['key'][key_val]['b']['result'];

    res.render('plants/keys/family_keys',{ key_obj, family, key_val, a_result, b_result, a_sentence:split_a_sentence, b_sentence:split_b_sentence, dictionary});
});

/******************************* PLANTS *********************************/

// INDEX ROUTE (/plants)
router.get('/', (req,res) => {
    Plant.find({}, (err, foundPlants) => {
        err ? console.log(err) : res.render('plants/index', { plants: foundPlants, currentUser: req.user });
    });    
});

// NEW ROUTE (plants/new)
router.get('/new',middleware.isLoggedIn,(req,res) => {
    res.render('plants/new')
});

// CREATE ROUTE (/plants)
router.post('/',middleware.isLoggedIn,(req,res)=>{
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    var newPlant = { 
        genus: req.body.genus, 
        species: req.body.species, 
        image: req.body.image, 
        author:author,
        sepals:req.body.sepals,
        pedals:req.body.pedals, 
        stamens:req.body.stamens, 
        carpels:req.body.carpels, 
        commonName:req.body.commonName,
        description: req.body.description,
        family: req.body.family
    };

    Plant.create(newPlant, (err, plant) => {
        err ? console.log(err):res.redirect('/plants');
    });
});

// SHOW ROUTE (/plants/show)
router.get('/:id',(req,res)=>{
    Plant.findById(req.params.id).populate('comments').exec((err,showPlant)=>{
        err ? console.log(err):res.render('plants/show',{plant:showPlant});
    });
});

// EDIT ROUTE
router.get('/:id/edit', middleware.checkPlantOwnership, (req, res) => {
    Plant.findById(req.params.id, (err, foundPlant) => {
        err ? res.redirect('/plants') : res.render('plants/edit', { plant: foundPlant });
    });
});

// UPDATE ROUTE
router.put('/:id', middleware.checkPlantOwnership, (req, res) => {
    Plant.findByIdAndUpdate(req.params.id, req.body.plant, (err, updatedPlant) => {
        err ? res.redirect('plants') : res.redirect('/plants/' + req.params.id);
    });

});

// DELETE ROUTE
router.delete('/:id', middleware.checkPlantOwnership, (req, res) => {
    Plant.findByIdAndRemove(req.params.id, err => {
        err ? res.redirect('/plants') : res.redirect('/plants');
    });
});





module.exports = router;