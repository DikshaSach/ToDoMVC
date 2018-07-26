'use strict';
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
// todo schema
const ToDoSchema = mongoose.Schema({
   toDoName: {type: String},
   toDoCompletion: {type: String},
   date: {type: String}
 });

ToDoSchema.methods.serialize = function(){
    return {
        toDoName: this.toDoName,
        toDoCompletion: this.toDoCompletion,
        date: this.date
    };
};


const ToDo = mongoose.model('ToDo', ToDoSchema);

module.exports = {ToDo};
