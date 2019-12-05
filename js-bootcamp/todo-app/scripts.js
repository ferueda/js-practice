const todo = [
  {
    name: 'Order cat food',
    completed: false
  },
  {
    name: 'Clean kitchen',
    completed: false
  },
  {
    name: 'Buy food',
    completed: true
  },
  {
    name: 'Do work',
    completed: false
  },
  {
    name: 'Excersise',
    completed: true
  },
  {
    name: 'Brush teeth',
    completed: false
  }
];

const filters = {
  searchText: '',
  hideCompleted: false
};

//render todos
const displayTodos = function(todos, filter) {
  const filteredNotes = todos.filter(todo => {
    const matchText = todo.name.toLowerCase().includes(filter.searchText.toLowerCase());
    const matchHidden = !filters.hideCompleted || !todo.completed;

    return matchText && matchHidden;
  });

  document.querySelector('#todos-container').innerHTML = '';

  const todosLeft = document.createElement('h2');
  todosLeft.textContent = `You have ${filteredNotes.length} todos left.`;
  document.querySelector('#todos-container').appendChild(todosLeft);

  filteredNotes.forEach(todo => {
    let p = document.createElement('p');
    p.textContent = todo.name;
    document.querySelector('#todos-container').appendChild(p);
  });
};

//search todos and add to filter object
document.querySelector('#search-todo-input').addEventListener('input', function() {
  filters.searchText = this.value;
  displayTodos(todo, filters);
});

//hide completed todos
document.querySelector('#completed-check').addEventListener('change', function(e) {
  filters.hideCompleted = e.target.checked;
  displayTodos(todo, filters);
});

document.querySelector('#add-todo-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const newTodo = e.target.elements['add-todo-input'].value;
  if (newTodo) {
    todo.push({
      name: newTodo,
      completed: false
    });
    e.target.elements['add-todo-input'].value = '';
    displayTodos(todo, filters);
  }
});

displayTodos(todo, filters);
