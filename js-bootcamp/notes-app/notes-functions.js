// read notes from localStorage

const getSavedNotes = function() {
  const notesJSON = localStorage.getItem('notes');
  if (notesJSON) return JSON.parse(notesJSON);
  else return [];
};

// save notes to localStorage

const saveNotesToLocalStorage = function(notes) {
  return localStorage.setItem('notes', JSON.stringify(notes));
};

// remove notes

const removeNote = function(id) {
  const noteIndex = notes.findIndex(note => note.id === id);
  if (noteIndex > -1) notes.splice(noteIndex, 1);
};

// generate the DOM structure for a note

const generateNote = function(note) {
  const noteContainer = document.createElement('div');
  const p = document.createElement('a');
  const delBtn = document.createElement('button');

  //setup remove note btn
  delBtn.textContent = 'x';
  noteContainer.appendChild(delBtn);
  delBtn.addEventListener('click', function() {
    removeNote(note.id);
    saveNotesToLocalStorage(notes);
    renderNotes(notes, filters);
  });

  // setup the note title text
  if (note.title.length > 0) {
    p.textContent = note.title;
  } else p.textContent = 'No title note';
  p.href = `edit.html#${note.id}`;
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
