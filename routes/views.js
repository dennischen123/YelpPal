const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    res.sendFile('views/index.html', {
        root: __dirname + '/../'
    })
    console.log('server works');
});

module.exports = router;