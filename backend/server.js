const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://mongo:27017/todo-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const TodoSchema = new mongoose.Schema({
    task: String,
    completed: Boolean
});

const Todo = mongoose.model('Todo', TodoSchema);

app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

app.post('/todos', async (req, res) => {
    const newTodo = new Todo({
        task: req.body.task,
        completed: false
    });
    await newTodo.save();
    res.json(newTodo);
});

app.listen(4000, () => {
    console.log('Backend running on port 4000');
});
