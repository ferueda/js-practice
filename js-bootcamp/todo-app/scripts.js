const todos = getTodosFromLocalStorage();

const filters = {
  searchText: '',
  hideCompleted: false
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
    saveTodosToLocalStorage(todos);
    displayTodos(todos, filters);
    e.target.elements['add-todo-input'].value = '';
  }
});

displayTodos(todos, filters);
