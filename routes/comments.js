var express = require('express');
var router = express.Router();

var Plant = require('../models/plant');
var Comment = require('../models/comment');
var Blog = require('../models/blog')

// IMPORT MIDDLEWARE
var middleware = require('../middleware');

// NEW ROUTE (plants/:id/comments/new)
router.get('/plants/:id/comments/new', middleware.isLoggedIn, (req, res) => {

    Plant.findById(req.params.id, (err, foundPlant) => {
        err ? console.log(err) : res.render('comments/new', { plant: foundPlant });
    });
});

// CREATE ROUTE (plants/:id/comments)
router.post('/plants/:id/comments', middleware.isLoggedIn, (req, res) => {
    Plant.findById(req.params.id, (err, plant) => {
        if (err) {
            console.log("Err post: " + err);
            res.redirect('/plants');
        } else {
            Comment.create(req.body.comment, (err, comment) => {
                if (err) {
                    req.flash('error', 'Something went wrong');
                    console.log(err);
                } else {

                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    comment.save();
                    plant.comments.push(comment);

                    plant.save();
                    req.flash('success','Successfully added comment');
                    res.redirect('/plants/' + plant._id);
                }
            });
        }
    })
});



// EDIT ROUTE
router.get('/plants/:id/comments/:comment_id/edit', middleware.checkCommentOwnership, function (req, res) {
    Comment.findById(req.params.comment_id, function (err, foundComment) {
        err ? console.log(err) : res.render('comments/edit', { plant_id: req.params.id, comment: foundComment });
    });
});

// UPDATE ROUTE
router.put('/plants/:id/comments/:comment_id', middleware.checkCommentOwnership, function (req, res) {
    // (id to find by, data to update with, callback)
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function (err, updatedComment) {
        err ? res.redirect('back') : res.redirect('/plants/' + req.params.id);
    });
});

// DELETE ROUTE
router.delete('/plants/:id/comments/:comment_id', middleware.checkCommentOwnership, function (req, res) {
    Comment.findByIdAndRemove(req.params.comment_id, function (err) {

        if(err){
            res.redirect('back');
        }else{
            req.flash('success','Comment deleted');
            res.redirect('/plants/' + req.params.id);
        }
    });
});

/********************BLOG COMMENTS ROUTES*************************************/

// BLOGS NEW ROUTE (blogs/:id/comments/new)
router.get('/blogs/:id/blogComments/new', middleware.isLoggedIn, (req, res) => {

    Blog.findById(req.params.id, (err, foundBlog) => {
        err ? console.log(err) : res.render('blogComments/new', {blog_id: req.params.id, blog: foundBlog });
    });
});

// BLOGS CREATE ROUTE (blogs/:id/comments)
router.post('/blogs/:id/blogComments', middleware.isLoggedIn, (req, res) => {
    Blog.findById(req.params.id, (err, blog) => {
        if (err) {
            console.log("Err post: " + err);
            res.redirect('/blogs');
        } else {
            Comment.create(req.body.comment, (err, comment) => {
                if (err) {
                    console.log(err);
                } else {

                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    comment.save();
                    blog.comments.push(comment);

                    blog.save();
                    res.redirect('/blogs/' + blog._id);
                }
            });
        }
    })
});

// EDIT ROUTE
router.get('/blogs/:id/blogComments/:comment_id/edit', middleware.checkCommentOwnership, function (req, res) {
    Comment.findById(req.params.comment_id, (err, foundComment) => {
        err ? console.log(err) : res.render('blogComments/edit', { blog_id: req.params.id, comment: foundComment });
    });
});

// UPDATE ROUTE
router.put('/blogs/:id/blogComments/:comment_id', middleware.checkCommentOwnership, function (req, res) {
    // (id to find by, data to update with, callback)
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function (err, updatedComment) {
        err ? res.redirect('back') : res.redirect('/blogs/' + req.params.id);
    });
});

// DELETE ROUTE
router.delete('/blogs/:id/blogComments/:comment_id', middleware.checkCommentOwnership, function (req, res) {
    Comment.findByIdAndRemove(req.params.comment_id, function (err) {
        err ? res.redirect('back') : res.redirect('/blogs/' + req.params.id);
    });
});

module.exports = router;