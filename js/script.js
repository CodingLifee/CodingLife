document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('scrollSobreNos').addEventListener('click', function() {
        document.getElementById('sobrenos').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('verMaisBtn').addEventListener('click', function() {
        var extraText = document.querySelector('.extra-text');
        var ellipsis = document.getElementById('ellipsis');
        
        if (extraText.style.display === 'none' || extraText.style.display === '') {
            extraText.style.display = 'inline';
            ellipsis.style.display = 'none'; // Esconde o "..."
            this.style.display = 'none'; // Esconde o botão
        }
    });
});