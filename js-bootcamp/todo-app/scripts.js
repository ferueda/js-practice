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
  searchText: ''
};

displayTodos(todo, filters);

document.querySelector('#add-todo-btn').addEventListener('click', function() {
  const nt = document.querySelector('#add-todo-input');
  if (nt.value) {
    let p = document.createElement('p');
    p.textContent = `${nt.value} (${false})`;
    document.querySelector('body').appendChild(p);
  }
});

document.querySelector('#remove-todo-btn').addEventListener('click', function() {
  todo.splice(0);
  displayTodos(todo, filters);
});

document.querySelector('#search-todo-input').addEventListener('input', function() {
  filters.searchText = this.value;
  displayTodos(todo, filters);
});

function displayTodos(todos, filter) {
  const filteredNotes = todos.filter(todo => todo.name.toLowerCase().includes(filter.searchText.toLowerCase()));

  document.querySelector('#todos-container').innerHTML = '';

  const todosLeft = document.createElement('h2');
  todosLeft.textContent = `You have ${filteredNotes.length} todos left.`;
  document.querySelector('#todos-container').appendChild(todosLeft);

  filteredNotes.forEach(todo => {
    let p = document.createElement('p');
    p.textContent = todo.name;
    document.querySelector('#todos-container').appendChild(p);
  });
}
