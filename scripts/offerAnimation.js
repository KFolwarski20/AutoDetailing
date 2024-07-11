const offers = document.querySelectorAll('.offer');

offers.forEach(offer => {
    offer.addEventListener('mouseenter', () => {
        offer.style.transform = 'scale(1.05)';
        offer.style.transition = 'transform 0.3s ease';
    });

    offer.addEventListener('mouseleave', () => {
        offer.style.transform = 'scale(1)';
    });
});