const taskService = require('../services/taskService.js');

// Função auxiliar para ler body
const getRequestBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = '';
// toda vez que se executa o código, ele utiliza a data, no caso coloca a data exata que foi usado/executado
        req.on('data', chunk => {
            body += chunk.toString();
        });
// a mesma coisa do da "data", só que toda vez que é executado quando os dados acabam de chegar
        req.on('end', () => {
            try {
                resolve(JSON.parse(body));
            } catch (e) {
                reject(e);
            }
        });
    });
};

// Criar tarefa
const createTask = async (req, res) => {
    const body = await getRequestBody(req);

    //adiciona o título, prioridade e se foi feita ou não na tarefa
    const task = taskService.addTask(body.title, body.priority);

    res.statusCode = 201;
    res.end(JSON.stringify(task));
};

// Listar tarefas
const listTasks = (req, res) => {
    const tasks = taskService.getTasks();

    res.statusCode = 200;
    res.end(JSON.stringify(tasks));
};

// Atualizar tarefa
const updateTask = async (req, res, id) => {
    const body = await getRequestBody(req);

    //
    const task = taskService.updateTask(id, body.title, body.priority, body.completed);

    if (!task) {
        res.statusCode = 404;
        return res.end(JSON.stringify(
            { message: 'Não encontrada' }
        ));
    }

    res.end(JSON.stringify(task));
};

// Deletar tarefa
const deleteTask = (req, res, id) => {
    const success = taskService.deleteTask(id);

    if (!success) {
        res.statusCode = 404;
        return res.end(JSON.stringify(
            { message: 'Não encontrada' }
        ));
    }

    res.end(JSON.stringify({ message: 'Removida' }));
};

const getTaskById = (req, res, id) => {
    const task = taskService.getTaskById(id);

    // Se a tarefa não existir ele aparecerá erro 404
    if (!task) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ message: 'Tarefa não encontrada' }));
    }

    // Se existir aparecerá a tarefa com status 200
    res.statusCode = 200;
    res.end(JSON.stringify(task));
};

module.exports = {
    createTask,
    listTasks,
    updateTask,
    deleteTask,
    getTaskById
};

