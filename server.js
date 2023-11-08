const btnReservar = document.getElementById('btnReservar');
const btnFinalizarReserva = document.getElementById('btnFinalizarReserva');
const div = document.getElementById('characters');

btnReservar.addEventListener('click', () => {
    // Ocultar imágenes al presionar el botón "RESERVAR"
    div.style.display = 'none';
});

btnFinalizarReserva.addEventListener('click', () => {
    // Mostrar imágenes al presionar el botón "Finalizar reserva"
    fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then((data) => renderCharacters(data.results));
});

function renderCharacters(characters) {
    // Limpiar el contenido anterior antes de mostrar nuevas imágenes
    div.innerHTML = '';
    
    characters.forEach(ch => {
        div.innerHTML += `<img src="${ch.image}">`;
    });

    // Mostrar las imágenes después de cargarlas
    div.style.display = 'block';
}