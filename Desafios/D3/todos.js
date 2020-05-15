var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer Café',
    'Fazer Lanche',
    'Arrumar a casa'
];

function renderTodos() {
    listElement.innerHTML = '';
    for (todo of todos) {
        var todoElement = document.createElement('li');
        var textElement = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var textLink = document.createTextNode(' Excluir');
        linkElement.setAttribute('href', '#');

        linkElement.appendChild(textLink);

        todoElement.appendChild(textElement);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}
renderTodos();

function addTodo() {
    var salvarText = inputElement.value;

    todos.push(salvarText);
    inputElement.value = '';
    renderTodos();
}

buttonElement.onclick = addTodo;