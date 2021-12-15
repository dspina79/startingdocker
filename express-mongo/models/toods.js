const mongoose = require('mongoose');

const todosSchema = mongoose.Schema({
    description: String,
    complete: Boolean
});

module.exports.Todos = mongoose.model('Todo', todosSchema);