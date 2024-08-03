document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.realization-card');
    const fullscreenContainer = document.getElementById('fullscreen-container');
    const fullscreenImages = document.querySelector('.fullscreen-images');
    const closeBtn = document.querySelector('.close-btn');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const images = JSON.parse(this.getAttribute('data-images'));
            fullscreenImages.innerHTML = '';
            images.forEach(image => {
                const img = document.createElement('img');
                img.src = image;
                fullscreenImages.appendChild(img);
            });
            fullscreenContainer.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function() {
        fullscreenContainer.style.display = 'none';
    });

    fullscreenContainer.addEventListener('click', function(e) {
        if (e.target === fullscreenContainer) {
            fullscreenContainer.style.display = 'none';
        }
    });
});
