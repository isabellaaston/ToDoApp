const DbService = require('../Services/DbService');
const ToDoService = require('../Services/ToDoService');

var ObjectId = require('mongodb').ObjectId

const setToDo = (req, res) => {
    const newTask = req.body.task;
    DbService((db) => {
        ToDoService.setAToDo(db, newTask)
    })
};

const getToDos = (req, res) => {
    DbService((db) => {
        ToDoService.getAllToDos(db, (documents) => {
            res.json(documents);
        })
    })
};

const getDones = (req, res) => {
    DbService((db) => {
        ToDoService.getAllDones(db, (documents) => {
            res.json(documents);
        })
    })
};


const markDone = (req, res) => {
    const id = ObjectId(req.body.id);
    DbService((db) => {
        ToDoService.markAsDone(db, id)
    })
};

const deleteToDo = (req, res) => {
    const id = ObjectId(req.body.id);
    DbService((db) => {
        ToDoService.deleteAToDo(db, id)
    })
};

const deleteDone = (req, res) => {
    const id = ObjectId(req.body.id);
    DbService((db) => {
        ToDoService.deleteADone(db, id)
    })
};

module.exports.setToDo = setToDo;
module.exports.getToDos = getToDos;
module.exports.getDones = getDones;
module.exports.markDone = markDone;
module.exports.deleteToDo = deleteToDo;
module.exports.deleteDone = deleteDone;