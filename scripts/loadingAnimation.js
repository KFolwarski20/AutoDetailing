window.addEventListener('load', function() {
    // Opóźnienie wyłączenia loadera i wyświetlenia zawartości o 5 sekund (5000 milisekund)
    setTimeout(function() {
        // Ukryj loader
        document.getElementById('loader').style.display = 'none';
        
        // Pokaż zawartość strony
        document.querySelector('.wrapper').style.display = 'block';
    }, 1500); // 1500 milisekund = 1,5 sekundy
});