const express = require('express');
const serverRouter = express.Router();

serverRouter.get('/:id/page', (req, res) =>{
    res.send('page for site id - [' + req.params.id+"]");
});

serverRouter.get('/:id', (req, res) =>{
    res.send('root for site id - [' + req.params.name+']');
});

module.exports = serverRouter;