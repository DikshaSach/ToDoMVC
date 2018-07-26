'use strict';
const router = require('express').Router();
const jsonParser = require('body-parser').json();
const mongoose = require('mongoose');
const {ToDo} = require('../todo/model');
const toDoService = require('../services/todoService');


router.post('/add/todo',jsonParser, async(req,res)=>{
    try{
        let ToDo = await toDoService.create(req.body);
        res.status(201).json(ToDo);
    }catch(err){
        res.status(500).json({message: "Problem creating todo."});
    }
})

router.get('/', function(req,res){
    ToDo
    .find(function(err, todo){
        if(err){
            console.log(err);
        }
        else {
            res.json(todo);
        }
    });
});

router.put('/edit/todo/:id', jsonParser, async (req, res) => {
    try{
        let ToDo = await toDoService.update(req.params.id, req.body);
        res.status(201).json(ToDo);
    } catch (err) {
        res.status(500).json({message: 'There was a problem updating.'});
      }
});

router.delete('/delete/todo/:id', async (req,res) => {
    try{
        let ToDo = await toDoService.remove(req.params.id);
        res.status(204).json(req.params.id);
     }catch(err){
         res.status(500).json({message: 'Something went wrong in deletion'});
     }
 });


module.exports = router;
