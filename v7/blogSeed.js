var mongoose = require('mongoose');
var Blog = require('./models/blog');
var Comment = require('./models/comment');

var data = [
    // Starter seed data for blog
    {
        title: 'Pillars of Creation',
        image: 'https://cdn.spacetelescope.org/archives/images/wallpaper2/heic1501a.jpg',
        body: 'Found in the Eagle Nebula, these "pillars" consist of dust which stellar nurseries within',
    },
    {
        title: 'Sombrero Galaxy',
        image: 'https://cdn.spacetelescope.org/archives/images/wallpaper2/opo0328a.jpg',
        body: 'This is Messier Object 104 (M104)',
    }
]

function blogSeedDB() {
    Blog.remove({}, function (err) {
        // Remove all existing blogs
        if (err) {
            console.log(err);
        }
        console.log('removed blogs!');

        data.forEach((seed) => {
            // Loop through the blogs outlines, create them with seed data
            Blog.create(seed, (err, blog) => {
                // Create blog and return 'blog' instance
                if (err) {
                    console.log(err);
                } else {
                    console.log('Added a Blog!')

                    // Add comments to this blog
                    Comment.create(
                        {
                            comment: 'This isnt real, I dont believe you'
                        }, function (err, comment) {
                            if (err) {
                                console.log(err);
                            } else {
                                blog.comments.push(comment); // Push comment to blog instance
                                blog.save();
                                console.log('Create new comment!')
                            }
                        }
                    );
                }
            });
        });
    });

};

module.exports = blogSeedDB;