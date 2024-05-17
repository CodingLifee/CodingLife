document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('scrollSobreNos').addEventListener('click', function() {
        document.getElementById('sobrenos').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
