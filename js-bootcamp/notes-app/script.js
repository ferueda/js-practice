let notes = getSavedNotes();

const filters = {
  searchText: ''
};

document.querySelector('#search-input').addEventListener('input', function(e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector('#create-note-btn').addEventListener('click', function() {
  const id = uuidv4();

  notes.push({
    id: id,
    title: '',
    body: ''
  });
  saveNotesToLocalStorage(notes);
  location.assign(`edit.html#${id}`);
});

window.addEventListener('storage', function(e) {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});

renderNotes(notes, filters);
