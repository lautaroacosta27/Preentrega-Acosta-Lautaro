const btn = document.getElementById('btnFinalizarReserva');
const div = document.getElementById('characters');

btn.addEventListener('click', () => {
  console.log('fetch api');

  fetch('https://rickandmortyapi.com/api/character')
  .then((response)=> response.json())
  .then((data)=> renderCharacters(data.results));
});

function renderCharacters(characters) {
  characters.forEach(ch =>{
    div.innerHTML += `<img src="${ch.image}">`;
  });
}