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

document.querySelector('#notes-form').addEventListener('submit', function(e) {
  e.preventDefault();
  console.log(e.target.elements['note-input'].value);
  e.target.elements['note-input'].value = '';
});
