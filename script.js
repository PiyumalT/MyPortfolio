// Dark mode , light mode and theme button
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


// Scroll to top button
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// show hide data set
function show_hide_list(event) {
    const parentSection = event.currentTarget.parentElement;
    var data_set = parentSection.querySelector(".data_set");
    var expand_icon = parentSection.querySelector(".expand_icon");
    
    if (data_set.style.maxHeight === "0px") {
        expand_icon.innerHTML = '<i class="fas fa-caret-up"></i>';

        for (var i = 0; i <= 30; i++) {
            setTimeout(function(index) {
                return function() {
                    var newHeight = (index * 12);
                    data_set.style.maxHeight = newHeight + 'px';
                };
            }(i), i * 10);
        }
    } else {
        expand_icon.innerHTML = '<i class="fas fa-caret-down"></i>';
        for (var i = 0; i <= 50; i++) {
            setTimeout(function(index) {
                return function() {
                    var newHeight =300- (index * 15);
                    data_set.style.maxHeight = newHeight + 'px';
                };
            }(i), i * 10);
        }
    }    
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

// Open the navigation menu when the hamburger icon is clicked
document.querySelector('.mobile-menu').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Close the navigation menu when a link is clicked
document.querySelectorAll('.nav-links li a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.querySelector('.nav-links').classList.remove('active');
    });
});


//animation for mobile menu
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
    if (navLinks.classList.contains("slide-out")) {
        navLinks.classList.remove("slide-out");
        navLinks.classList.add("slide-in");
    } else {
        navLinks.classList.remove("slide-in");
        navLinks.classList.add("slide-out");
    }
});

//about me text animation
const textContainer = document.getElementById("animatedText");
const text = "I'm currently an undergraduate student with a knack for full-stack development. I enjoy bridging the gap between front-end and back-end realms, crafting holistic digital solutions that marry user experience with technical functionality.";
let index = 0;

function addLetter() {
    if (index < text.length) {
        textContainer.textContent += text[index];
        index++;
        setTimeout(addLetter, 30); // Adjust the delay here
    } else {
        setTimeout(clearText, 2000); // Wait 2 second and then clear text
    }
}

function clearText() {
    textContainer.textContent = "";
    index = 0;
    setTimeout(addLetter, 400); // Wait 0.4 second and then start typing again
}
addLetter();


// Hide the theme button when scrolling down and show it when scrolling up
let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        darkModeButton.style.display = "block"; // Show button when scrolling up
        navbar.style.position = "fixed";
    } else {
        darkModeButton.style.display = "none"; // Hide button when scrolling down
        navbar.style.position = "inherit";
    }

    prevScrollPos = currentScrollPos;
});


//Message me window handling
const openModalButton = document.getElementById("openModal");
const modalOverlay = document.querySelector(".modal-overlay");
const closeButton = document.querySelector(".close");

openModalButton.addEventListener("click", () => {
    modalOverlay.style.display = "block";
});

closeButton.addEventListener("click", () => {
    modalOverlay.style.display = "none";
});

modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) {
        modalOverlay.style.display = "none";
    }
});

function openModal() {
    modalOverlay.style.display = "block";
}


//skill progress bar
function updateProgressBar(skillName, percentage) {
    const progresscontainer = document.querySelector('.progress-container');
    progresscontainer.style.display = 'block';

    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = percentage + '%';
    // progressBar.textContent = skillName + ' ' + percentage + '%'; // Show skill name and percentage
    progressBar.textContent = skillName ;
}

// Developed by Tharindu Piyumal
// First version released at August 2023
// Follow me at www.github.com/PiyumalT

  