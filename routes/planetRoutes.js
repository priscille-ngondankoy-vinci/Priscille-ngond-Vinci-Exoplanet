const express = require('express');
const router = express.Router();
const planetController= require('../src/app');
router.post('/planets', app.createPlanet, (req,res) => {
    res.render('planet',  {message: "Planet registered"});
});
module.exports = router;