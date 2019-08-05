var mongoose = require('mongoose'),
    Comment  = require('./models/comment'),
    Plant    = require('./models/plant');

var data = [
    {
        genus: 'Taraxicum',
        species: 'officianalis'
    },
    {
        genus: 'Populus',
        species: 'tremuloides'
    }
];

function plantSeedDB() {
    Plant.remove({}, (err)=>{
        if(err){
            console.log(err);
        }
        console.log('Removed Plants from Database!');
        
        // data.forEach((seed)=>{
        //     Plant.create(seed, (err, plant)=>{
        //         if(err){
        //             console.log(err);
        //         }
                
        //         console.log('Added Plant!');

        //         Comment.create({
        //             user: 'Brendan',
        //             comment: 'I suck balls'
        //         }, (err, createdComment)=>{
        //             if(err){
        //                 console.log(err);
        //             }else{
        //                 plant.comments.push(createdComment);
        //                 plant.save();
        //                 console.log('Added a comment!');
        //             }
        //         });
                
        //     });
        // }); 
    });
};

module.exports = plantSeedDB;