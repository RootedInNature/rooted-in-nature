var express = require('express');
var router = express.Router();

// SCHEMA MODEL IMPORTS
var Blog = require('../models/blog');

// IMPORT MIDDLEWARE
var middleware = require('../middleware');

// INDEX ROUTE /blogs --> Blog.find()
router.get('/',(req,res)=>{
    // List all blogs
    Blog.find({}, (err, theBlogs)=>{
        err ? res.redirect('/') : res.render('blogs/index', { blogs: theBlogs, currentUser: req.user  })
    });

});

// NEW ROUTE /blogs/new 
router.get('/new', middleware.isLoggedIn,(req,res)=>{
    // Show new blog form
    // pass in blog_id so can add back button to the new comment page
    res.render('blogs/new', { blog_id: req.params.id});
});

// CREATE ROUTE /blogs --> Blog.create()
router.post('/', middleware.isLoggedIn, (req, res) => {
    let body = req.body.blog;
    let author = {
        id: req.user._id,
        username: req.user.author
    }
    // Create new blog then redirect somewhere
    var newBlog = { title: body.title, image: body.image, body: body.body, author:author };

    Blog.create(newBlog, (err, newBlog)=>{
        err ? res.render('blogs/new') : res.redirect('/blogs'); 
    });
});

// SHOW ROUTE /blogs/:id --> Blog.findById()
router.get('/:id',(req, res) => {
    // Show info about specific blog based on its id
    Blog.findById(req.params.id).populate('comments').exec((err, showBlog)=>{
        err ? console.log(err) : res.render('blogs/show', {blog:showBlog});
    });
});

// EDIT ROUTE /blogs/id/edit --> Blog.findById()
router.get("/:id/edit", middleware.checkBlogOwnership,(req,res)=>{
    // Show edit form for specific blog
    Blog.findById(req.params.id, (err, foundBlog) => {
        err ? res.redirect('/blogs') : res.render('blogs/edit', { blog: foundBlog });
    });

});

// Need method-override for the following two routes

// UPDATE ROUTE /blogs/:id --> Blog.findByIdAndUpdate()
router.put('/:id', middleware.checkBlogOwnership,(req,res)=>{
    // Update particular blog and redirect
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedBlog) => {
        err ? res.redirect('blogs') : res.redirect('/blogs/' + req.params.id);
    });

});

// DELETE ROUTE /blogs/:id --> Blog.findByIdAndRemove()
router.delete('/:id', middleware.checkBlogOwnership,(req, res) => {
    Blog.findByIdAndRemove(req.params.id, err => {
        err ? res.redirect('/blogs') : res.redirect('/blogs');
    });
});


module.exports = router;

// // EDIT ROUTE
// router.get('', middleware.checkPlantOwnership, (req, res) => {
//     Plant.findById(req.params.id, (err, foundPlant) => {
//         err ? res.redirect('/plants') : res.render('plants/edit', { plant: foundPlant });
//     });
// });

// // UPDATE ROUTE
// router.put('/:id', middleware.checkPlantOwnership, (req, res) => {
//     Plant.findByIdAndUpdate(req.params.id, req.body.plant, (err, updatedPlant) => {
//         err ? res.redirect('plants') : res.redirect('/plants/' + req.params.id);
//     });

// });

// // DELETE ROUTE
// router.delete('/:id', middleware.checkPlantOwnership, (req, res) => {
//     Plant.findByIdAndRemove(req.params.id, err => {
//         err ? res.redirect('/plants') : res.redirect('/plants');
//     });
// });