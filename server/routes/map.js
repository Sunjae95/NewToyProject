const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/map', (req, res) => {
    res.json({success: true, prxoy: true});
    
    
    // fetch('https://api.themoviedb.org/3/movie/popular?api_key=6901bbe355df1825e1d70fa1d8209c67&language=en-US&page=1')
    // .then(res => res.json())
    // .then(res => console.log(res));
    
    console.log('hi2');
});


module.exports = router;
