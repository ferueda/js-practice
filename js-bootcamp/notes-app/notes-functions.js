// read notes from localStorage

const getSavedNotes = function() {
  const notesJSON = localStorage.getItem('notes');
  if (notesJSON) return JSON.parse(notesJSON);
  else return [];
};

// save notes to localStorage

const saveNotesToLocalStorage = function() {
  return localStorage.setItem('notes', JSON.stringify(notes));
};

// generate the DOM structure for a note

const generateNote = function(note) {
  const noteContainer = document.createElement('div');
  const p = document.createElement('span');
  const delBtn = document.createElement('button');

  // setup the note title text
  if (note.title.length > 0) {
    p.textContent = note.title;
  } else p.textContent = 'No title note';

  //setup the remove note btn
  delBtn.textContent = 'x';

  noteContainer.appendChild(delBtn);
  noteContainer.appendChild(p);

  return noteContainer;
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
