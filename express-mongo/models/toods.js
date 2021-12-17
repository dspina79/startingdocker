const mongoose = require('mongoose');

const todosSchema = mongoose.Schema({
    description: String,
    assignee: String,
    complete: Boolean
});

module.exports.Todos = mongoose.model('Todo', todosSchema);