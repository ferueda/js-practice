const notes = getSavedNotes();

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

renderNotes(notes, filters);
