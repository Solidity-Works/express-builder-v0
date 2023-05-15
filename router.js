const express = require('express');
const router = express.Router();

router.get('/:id/editor', (req, res) =>{
    //TODO check that user has site access with JWT and only accept POST request
    res.send('editor for site id - [' + req.params.id+"]");
});

router.get('/:id', (req, res) =>{
    //TODO check that user has site access with JWT and only accept POST request
    res.send('root for site id - [' + req.params.name+']');
});

module.exports = router;