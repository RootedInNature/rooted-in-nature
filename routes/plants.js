var express = require('express');
var router  = express.Router();

// SCHEMA MODEL IMPORTS
var Plant = require('../models/plant');

// IMPORT MIDDLEWARE
var middleware = require('../middleware');

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
    var newPlant = { genus: req.body.genus, species: req.body.species, image: req.body.image, author:author};

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