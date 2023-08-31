//Mode Toggle
function toggleMode() {
    const body = document.body;
    const mobileMenuToggleSpans = document.querySelectorAll(".mobile-menu-toggle span");

    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    if (body.classList.contains("dark-mode")) {
        mobileMenuToggleSpans.forEach(span => {
            span.style.backgroundColor = "#ffffff"; 
        });
    } else {
        mobileMenuToggleSpans.forEach(span => {
            span.style.backgroundColor = "#000000"; 
        });
    }
}

//Mobile Menu Toggle
function toggleMobileMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle.checked) {
        navLinks.classList.remove("active");
    } else {
        navLinks.classList.add("active");

    }
}
