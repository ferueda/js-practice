const notes = getSavedNotes();

const filters = {
  searchText: ''
};

document.querySelector('#search-input').addEventListener('input', function(e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector('#create-note-btn').addEventListener('click', function(e) {
  notes.push({
    id: uuidv4(),
    title: '',
    body: ''
  });
  saveNotesToLocalStorage(notes);
  renderNotes(notes, filters);
});

renderNotes(notes, filters);
