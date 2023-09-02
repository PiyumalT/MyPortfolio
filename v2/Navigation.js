//Mode Toggle
function toggleMode() {
    const body = document.body;
    const mobileMenuToggleSpans = document.querySelectorAll(".mobile-menu-toggle span");
    const LightModebtn = document.getElementById("LightModebtn");
    const DarkModebtn = document.getElementById("DarkModebtn");

    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    if (body.classList.contains("dark-mode")) {
        mobileMenuToggleSpans.forEach(span => {
            span.style.backgroundColor = "#ffffff";
        });
        LightModebtn.style.display = "block"; // Show the light mode button
        DarkModebtn.style.display = "none";   // Hide the dark mode button
    } else {
        mobileMenuToggleSpans.forEach(span => {
            span.style.backgroundColor = "#000000";
        });
        LightModebtn.style.display = "none";   // Hide the light mode button
        DarkModebtn.style.display = "block";  // Show the dark mode button
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

// Function to close the mobile menu
function closeMobileMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle.checked) {
        menuToggle.checked = false; // Uncheck the menu toggle input
        navLinks.classList.remove("active");
    }
}

// Add event listeners to menu items to close the mobile menu
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".nav-links li");

    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            closeMobileMenu(); // Close the mobile menu
        });
    });
});



// Scroll to top button
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Navigation make smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
