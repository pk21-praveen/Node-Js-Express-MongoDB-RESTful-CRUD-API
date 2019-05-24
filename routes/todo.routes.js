const express = require('express');
const controller = require('../controllers/todo.controllers');
const router = express.Router();

// Create a new Todo
router.post('/todos', (req,res)=>{
    controller.create(req.body).then(data =>{
        res.status(data.status).send({message : data.message})
    }).catch(err =>{
        res.status(err.status).send({message : err.message})
    })
});

// Retrieve all Todo
router.get('/todos', (req,res)=>{
    controller.findAll().then(data =>{
        res.status(data.status).send(data.data)
    }).catch(err =>{
        res.status(err.status).send({message : err.message})
    })
});

// Retrieve a single Todo with todoId
router.get('/todos/:id',(req,res)=>{
    controller.findOne(req.params.id).then(data =>{
        res.status(data.status).send(data.data)
    }).catch(err =>{
        res.status(err.status).send({message : err.message})
    })
});

// Update a Todo with todoId
router.put('/todos/:id', (req,res)=>{
    controller.update(req.params.id,req.body).then(data =>{
        res.status(data.status).send({message : data.message})
    }).catch(err =>{
        res.status(err.status).send({message : err.message})
    })
});

// Delete a Todo with todoId
router.delete('/todos/:id', (req,res)=>{
    controller.delete(req.params.id).then(data =>{
        res.status(data.status).send({message : data.message})
    }).catch(err =>{
        res.status(err.status).send({message : err.message})
    })
});

module.exports = router;