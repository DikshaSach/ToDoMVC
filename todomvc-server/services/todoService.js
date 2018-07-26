const {ToDo} = require('../todo/model');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

function todoService(){
    this.create = function(toDoObj){
        return new Promise(async(resolve,reject)=>{
            try{
                let{
                    toDoName,
                    toDoCompletion,
                    date
                } = toDoObj;
                let newToDo = await ToDo
                .create({
                    toDoName,
                    toDoCompletion,
                    date
                });
                resolve(newToDo);

            } catch(err) {
                console.log('Error');
                reject('Mongoose error');
            }
        });
    },
    this.update = function(id, todo){
        return new Promise(async (resolve, reject)=>{
            const updated = {};
            const updateableFields = ['toDoName', 'toDoCompletion'];
            updateableFields.forEach(field => {
                if (field in todo) {
                    updated[field] = todo[field];
                }
            });
            let updatedToDo = ToDo
            .findByIdAndUpdate(id, {
                $set: updated},
                {
                    new: true
                });
                resolve(updatedToDo);
        });
    },
    this.remove = function(id){
        return new Promise(async(resolve, reject)=> {
            let deleteToDo = await ToDo
                .findByIdAndRemove(id);
                resolve(deleteToDo)
        });
    };
};


module.exports = new todoService();