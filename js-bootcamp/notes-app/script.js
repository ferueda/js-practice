const notes = [
  {
    title: 'my next trip',
    body: 'I would like to go to Spain'
  },
  {
    title: 'Habits to work on',
    body: 'Excersise. Eating a bit better.'
  },
  {
    title: 'Office modification',
    body: 'Get a new seat'
  }
];

const filters = {
  searchText: ''
};

const renderNotes = function(notes, filters) {
  const filteredNotes = notes.filter(note => note.title.includes(filters.searchText));
  const container = document.querySelector('#notes-container');

  container.innerHTML = '';

  filteredNotes.forEach(note => {
    const p = document.createElement('p');
    p.textContent = note.title;
    container.appendChild(p);
  });
};

document.querySelector('#search-input').addEventListener('input', function(e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

renderNotes(notes, filters);
