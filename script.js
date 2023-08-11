const darkModeButton = document.getElementById('darkModeButton');
const body = document.body;

darkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    if (body.classList.contains('dark-mode')) {
        darkModeButton.innerHTML = 'Theme : <i class="fas fa-moon"></i>';
    } else {
        darkModeButton.innerHTML = 'Theme : <i class="fas fa-sun"></i>';
    }
});



function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
