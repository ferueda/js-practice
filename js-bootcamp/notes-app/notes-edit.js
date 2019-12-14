const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find(note => note.id === noteId);

if (!note) location.assign('index.html');

const noteTitle = document.querySelector('#note-title');
const noteBody = document.querySelector('#note-body');

noteTitle.value = note.title;
noteBody.value = note.body;

noteTitle.addEventListener('input', function(e) {
  note.title = e.target.value;
  saveNotesToLocalStorage(notes);
});

noteBody.addEventListener('input', function(e) {
  note.body = e.target.value;
  saveNotesToLocalStorage(notes);
});

const delBtn = document.querySelector('#remove-note');

delBtn.addEventListener('click', function() {
  removeNote(noteId);
  saveNotesToLocalStorage(notes);
  location.assign('index.html');
});

window.addEventListener('storage', function(e) {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    note = notes.find(note => note.id === noteId);

    if (!note) location.assign('index.html');

    noteTitle.value = note.title;
    noteBody.value = note.body;
  }
});
