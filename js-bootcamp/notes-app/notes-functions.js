// read notes from localStorage

const getSavedNotes = function() {
  const notesJSON = localStorage.getItem('notes');
  if (notesJSON) return JSON.parse(notesJSON);
  else return [];
};

// generate the DOM structure for a note

const generateNote = function(note) {
  const p = document.createElement('p');
  if (notes.title > 0) p.textContent = note.title;
  else p.textContent = 'No title note';
  return p;
};

// Render notes

const renderNotes = function(notes, filters) {
  const filteredNotes = notes.filter(note => note.title.includes(filters.searchText));
  const container = document.querySelector('#notes-container');

  container.innerHTML = '';

  filteredNotes.forEach(note => {
    container.appendChild(generateNote(note));
  });
};
