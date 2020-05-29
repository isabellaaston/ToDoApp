const setAToDo = (db, item) => {
    let collection =db.collection('ToDos');
    collection.insertOne({task: item, isDone: false});
};

const getAllToDos = (db, callback) => {
    let collection = db.collection('ToDos');
    collection.find({isDone: false}).toArray((err, documents) => {
        callback(documents);
    });
};

const getAllDones = (db, callback) => {
    let collection = db.collection('ToDos');
    collection.find({isDone: true}).toArray((err, documents) => {
        callback(documents);
    });
};

const markAsDone = (db, id) => {
    let collection = db.collection('ToDos');
    collection.updateOne({_id: id}, {$set:{isDone: true}});
}

const deleteAToDo = (db, id) => {
    let collection = db.collection('ToDos');
    collection.deleteOne({_id: id});
}

const deleteADone = (db, id) => {
    let collection = db.collection('ToDos');
    collection.deleteOne({_id: id});
}

module.exports.setAToDo = setAToDo;
module.exports.getAllToDos = getAllToDos;
module.exports.getAllDones = getAllDones;
module.exports.markAsDone = markAsDone;
module.exports.deleteAToDo = deleteAToDo;
module.exports.deleteADone = deleteADone;
