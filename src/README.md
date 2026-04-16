# To-Do List

Este projeto consiste em uma API para gerenciamento de tarefas, desenvolvida como parte de uma atividade prática de desenvolvimento de sistemas

## Descrição do Projeto
A aplicação permite o gerenciamento completo de uma lista de tarefas, onde cada item possui propriedades como título, prioridade, status de conclusão e data de criação

## Tecnologias Utilizadas
* **Node.js**: Aonde se executa o servidor
* **Express**: Aonde se usa frameworks para a utilização das rotas
* **JavaScript**: Linguagem principal
* **Git**: Controle de versão

## Como Configurar o Ambiente
1. Certifique-se de ter o **Node.js** instalado em sua máquina ( se não estiver instalado ele não poderá ser acessado)
2. Clone o repositório utilizando esse código:  git clone [https://github.com/FelipeFardelone/API_TO_DO_LIST.git](https://github.com/FelipeFardelone/API_TO_DO_LIST.git)
3. Acesse a pasta do projeto pelo terminal:  cd API_TO_DO_LIST
   
## Como Instalar as Dependências
Com o terminal aberto na pasta do projeto, execute o comando "npm install" para baixar as bibliotecas necessárias. Após configurar o ambiente e instalar as
dependências você irá executar o aplicativo

## Como Executar o Aplicativo
1. Primeiro você precisa iniciar o servidor, para inicialo utilize esse comando no terminal: npm start
2. Após fazer isso, a API estará rodando em [http://localhost:3000](http://localhost:3000)
3. Instale a extensão: Thunder Client ou ferramentas como Postman
Depois de fazer todos os passos você poderá testar os endpoints GET, POST, PUT e DELETE

## Como o problema foi resolvido
O problema foi resolvido através da implementação de uma arquitetura modular baseada em camadas, garantindo que o código seja organizado e fácil de manter:
1. Routes: Definem as rotas de acesso e direcionam as requisições para os controladores
2. Controllers: Processam as requisições vindas das rotas, validam os dados de entrada e formatam a resposta JSON enviada ao cliente
3. Services: É aonde se concentra a lógica de negócio, realizando a manipulação dos dados
4. Models: Representam a estrutura da tarefa dentro do sistema
5. Armazenamento: Os dados são armazenados em memória, permitindo operações rápidas de criação, leitura, atualização e exclusão de tarefas sem precisar fazer um banco de dados externo, sendo algo mais simples

## Como acessar o vídeo sobre esse trabalho
1. Clique nesse link: [https://youtu.be/kUEsUEcrABE](https://youtu.be/kUEsUEcrABE)
2. Se divirta assitindo o vídeo