// Agregar interactividad a los items
document.querySelectorAll('.wish-item').forEach(item => {
    item.addEventListener('click', function() {
        const title = this.querySelector('.wish-title').textContent;
        console.log(`Visitando: ${title}`);
        // Aquí puedes agregar lógica para abrir links, guardar favoritos, etc.
    });
});

// Efecto de cursor personalizado
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.wish-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
    });
});
