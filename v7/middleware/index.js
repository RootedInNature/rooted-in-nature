/* ==========================================================================
                                MIDDLEWARE
   ========================================================================== */

var middlewareObj = {};
var Plant = require('../models/plant');
var Comment = require('../models/comment');
var Blog = require('../models/blog');

middlewareObj.checkBlogOwnership = (req,res,next) => {
    
    if(req.isAuthenticated()) {
        // If user is logged in
        Blog.findById(req.params.id, (err,foundBlog) => {
            if(err || !foundBlog){
                req.flash('error', 'Blog not found')
                res.redirect('back');
            }else{
                
                if(foundBlog.author.id.equals(req.user.id)){
                    // If user owns the blog
                    next() 
                }else{
                    // If user doesnt own the blog
                    req.flash('error','You dont have permission to do that!');
                    res.redirect('/login');
                };
            }
        });
    }else{
        // If no user logged in
        req.flash('error','You need to be logged in to do that!')
        res.redirect('/login');
    }
}

middlewareObj.checkPlantOwnership = (req, res, next) => {
    if (req.isAuthenticated()) {
        Plant.findById(req.params.id, (err, foundPlant) => {
            if (err || !foundPlant) {
                res.redirect('back');
            } else {
                foundPlant.author.id.equals(req.user.id) ? next() : res.redirect('back');
            }
        });
    } else {
        res.redirect('back');
    }
}

middlewareObj.checkCommentOwnership = (req, res, next) => {
    // Is user logged in?
    if (req.isAuthenticated()) {
        Comment.findById(req.params.comment_id, function (err, foundComment) {
            if (err || !foundComment) {
                req.flash('error', 'Comment not found');
                res.redirect('back');
            } else {
                // If the user ownss the comment
                if (foundComment.author.id.equals(req.user._id)) {
                    // Logged in users id (req.user._id)
                    next();
                } else {
                    req.flash('error','You are not authorized to do that!');
                    res.redirect('back');
                }
            }
        });
    } else {
        res.redirect('back'); // Back to the page they were on
    }
};

middlewareObj.isLoggedIn =
    (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }
        req.flash('error','Please Login First'); 
        res.redirect('/login');

    }

module.exports = middlewareObj;
