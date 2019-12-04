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

const btn = document.querySelector('button');
btn.addEventListener('click', function(e) {
  console.log(e);
});
