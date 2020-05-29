const ToDoController = require('../Controllers/ToDoController');

const routes = (app) => {
    app.post('/uncompleted', ToDoController.setToDo);
    app.get('/uncompleted', ToDoController.getToDos);
    app.delete('/uncompleted', ToDoController.deleteToDo);
    app.get('/completed', ToDoController.getDones);
    app.delete('/completed', ToDoController.deleteDone);
    app.put('/uncompleted/complete', ToDoController.markDone);
};

module.exports = routes;