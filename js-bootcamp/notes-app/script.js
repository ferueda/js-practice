let notes = [];

const filters = {
  searchText: ''
};

const notesJSON = localStorage.getItem('notes');
if (notesJSON) notes = JSON.parse(notesJSON);

const renderNotes = function(notes, filters) {
  const filteredNotes = notes.filter(note => note.title.includes(filters.searchText));
  const container = document.querySelector('#notes-container');

  container.innerHTML = '';

  filteredNotes.forEach(note => {
    const p = document.createElement('p');
    if (notes.title > 0) p.textContent = note.title;
    else p.textContent = 'No title note';
    container.appendChild(p);
  });
};

document.querySelector('#search-input').addEventListener('input', function(e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector('#create-note-btn').addEventListener('click', function(e) {
  notes.push({
    title: '',
    body: ''
  });
  localStorage.setItem('notes', JSON.stringify(notes));
  renderNotes(notes, filters);
});

renderNotes(notes, filters);
