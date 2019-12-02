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

const deleteTodo = function(notes, name) {
  const index = notes.findIndex(todo => todo.name.toLowerCase() === name.toLowerCase());
  if (index !== -1) return notes.splice(index, 1);
  else return "Todo doesn't exist";
};

const addTodo = function(notes, name, status) {
  const newTodo = {
    name: name,
    completed: status
  };
  return notes.push(newTodo);
};

const filterByStatus = function(notes, status) {
  return notes.filter(note => note.completed === status);
};

const filterByName = function(notes, text) {
  const regex = new RegExp(text, 'gi');
  return notes.filter(note => regex.test(note.name));
};
