// script.js

document.addEventListener("DOMContentLoaded", () => {
    const searchBox = document.getElementById('searchBox');
    const movieCards = document.querySelectorAll('.movie-card');

    searchBox.addEventListener('input', () => {
        const query = searchBox.value.toLowerCase();
        movieCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            if (title.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
