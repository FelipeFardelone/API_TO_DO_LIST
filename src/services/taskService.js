const { createTask } = require('../models/taskModel.js');

let tasks = [];
let idCounter = 1;

// Criar - Agora recebe title e priority
const addTask = (title, priority,completed) => {
    // Passamos a priority para o Model
    const task = createTask(idCounter++, title, priority,completed);
    tasks.push(task);
    return task;
};

// Listar
const getTasks = () => tasks;

// Atualizar
const updateTask = (id, title, priority, completed) => {
    const task = tasks.find(t => t.id == parseInt(id));

    if (!task) return null;

    if (title) task.title = title;// Permite mudar o título depois
    if (priority) task.priority = priority; // Permite mudar a prioridade depois
 
    if (completed !== undefined) {
    task.completed = completed;  // Permite mudar se está completo ou não depois
}

    
    return task;
};

// Deletar
const deleteTask = (id) => {
    const index = tasks.findIndex(t => t.id == id);
    if (index === -1) return false;

    tasks.splice(index, 1);
    return true;
};

const getTaskById = (id) => {
   
    return tasks.find(t => t.id == id);  // Procura a tarefa que tenha o Id igual ao que foi enviado
};

module.exports = {
    addTask,
    getTasks,
    updateTask,
    deleteTask,
    getTaskById
};
