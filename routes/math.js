var express = require('express');
var router = express.Router();

// IMPORT MIDDLEWARE
var middleware = require('../middleware');

router.get('/statistics',(req,res)=>{
    res.render('math/graphs')
})

module.exports = router;