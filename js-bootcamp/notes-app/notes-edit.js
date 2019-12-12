const noteId = location.hash.substring(1);
const notes = getSavedNotes();
const note = notes.find(note => note.id === noteId);

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
  saveNotesToLocalStorage();
});
