// get todos from localStorage
const getTodosFromLocalStorage = function() {
  const todosJSON = localStorage.getItem('todos');
  if (todosJSON) return JSON.parse(todosJSON);
  else return [];
};

// save new todos to localStorage
const saveTodosToLocalStorage = function(todos) {
  return localStorage.setItem('todos', JSON.stringify(todos));
};

// create todo DOM element
const createTodoDomElement = function(todo) {
  let p = document.createElement('p');
  p.textContent = todo.name;
  return p;
};

// render todos
const displayTodos = function(todos, filter) {
  const filteredTodos = todos.filter(todo => {
    const matchText = todo.name.toLowerCase().includes(filter.searchText.toLowerCase());
    const matchHidden = !filters.hideCompleted || !todo.completed;

    return matchText && matchHidden;
  });

  document.querySelector('#todos-container').innerHTML = '';

  generateSummaryDOM(filteredTodos);

  filteredTodos.forEach(todo => {
    document.querySelector('#todos-container').appendChild(createTodoDomElement(todo));
  });
};

// get DOM elements for summary list
const generateSummaryDOM = function(todos) {
  const todosLeft = document.createElement('h2');
  todosLeft.textContent = `You have ${todos.length} todos left.`;
  document.querySelector('#todos-container').appendChild(todosLeft);
};
