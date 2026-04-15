const createTask = (id, title, priority = 'Baixa') => {
    return {
        id,
        title,
        completed: false,
        priority, 
        createdAt: new Date().toISOString() // essa função pega o horário exato que está sendo executado o
    };
};

module.exports = { createTask };

