const express = require('express');
const router = express.Router();


router.get('/', (req,res) =>{
    res.sendFile('views/index.html', {
        root: __dirname + '/../'
    })
});

router.get('/signin', (req,res) =>{
    res.sendFile('views/signIn.html', {
        root: __dirname + '/../'
    })
});
router.get('/signup', (req,res) =>{
    res.sendFile('views/signUp.html', {
        root: __dirname + '/../'
    })
});

router.get('/restaurant/:id', (req, res) => {
    res.sendFile('views/restaurant.html', {
      root: __dirname + '/../',
    });
});

// Register Template
router.get('/register', (req, res) => {
	res.sendFile('views/signup.html', {
		root: __dirname + '/../',
	});
});

// Login Template
router.get('/login', (req, res) => {
	res.sendFile('views/signin.html', {
		root: __dirname + '/../',
	});
});

module.exports = router;