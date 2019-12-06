let todos = [];

const filters = {
  searchText: '',
  hideCompleted: false
};

const todosJSON = localStorage.getItem('todos');
if (todosJSON) todos = JSON.parse(todosJSON);

//render todos
const displayTodos = function(todos, filter) {
  const filteredTodos = todos.filter(todo => {
    const matchText = todo.name.toLowerCase().includes(filter.searchText.toLowerCase());
    const matchHidden = !filters.hideCompleted || !todo.completed;

    return matchText && matchHidden;
  });

  document.querySelector('#todos-container').innerHTML = '';

  const todosLeft = document.createElement('h2');
  todosLeft.textContent = `You have ${filteredTodos.length} todos left.`;
  document.querySelector('#todos-container').appendChild(todosLeft);

  filteredTodos.forEach(todo => {
    let p = document.createElement('p');
    p.textContent = todo.name;
    document.querySelector('#todos-container').appendChild(p);
  });
};

//search todos and add to filter object
document.querySelector('#search-todo-input').addEventListener('input', function() {
  filters.searchText = this.value;
  displayTodos(todos, filters);
});

//hide completed todos
document.querySelector('#completed-check').addEventListener('change', function(e) {
  filters.hideCompleted = e.target.checked;
  displayTodos(todos, filters);
});

document.querySelector('#add-todo-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const newTodo = e.target.elements['add-todo-input'].value;
  if (newTodo) {
    todos.push({
      name: newTodo,
      completed: false
    });
    localStorage.setItem('todos', JSON.stringify(todos));
    displayTodos(todos, filters);
    e.target.elements['add-todo-input'].value = '';
  }
});

displayTodos(todos, filters);
