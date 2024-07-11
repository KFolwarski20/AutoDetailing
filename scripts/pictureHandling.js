document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.realization-card');

            cards.forEach(card => {
                card.addEventListener('mouseover', function () {
                    const afterImage = card.querySelector('.after-image');
                    afterImage.style.opacity = '1';
                });

                card.addEventListener('mouseout', function () {
                    const afterImage = card.querySelector('.after-image');
                    afterImage.style.opacity = '0';
                });
            });
        });