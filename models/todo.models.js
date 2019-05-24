const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    title: {
        type: String
    },
    content: {
        type: String
    }
});

module.exports = mongoose.model('Todo', TodoSchema);