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

function show_hide_list(event) {
    const parentSection = event.currentTarget.parentElement;
    var data_set = parentSection.querySelector(".data_set");
    var expand_icon = parentSection.querySelector(".expand_icon");
    
    if (data_set.style.maxHeight === "0px") {
        // data_set.style.maxHeight = "1000px"; // Set max-height to your desired value
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
        // data_set.style.maxHeight = "0"; // Set max-height to 0
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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('.mobile-menu').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
});
// Close the navigation menu when a link is clicked
document.querySelectorAll('.nav-links li a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.querySelector('.nav-links').classList.remove('active');
    });
});



const textContainer = document.getElementById("animatedText");
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tenetur sint laudantium ad facere a doloremque fugiat hic odit nihil, est officiis provident deleniti error impedit distinctio, dolor unde commodi.";
let index = 0;

function addLetter() {
    if (index < text.length) {
        textContainer.textContent += text[index];
        index++;
        setTimeout(addLetter, 50); // Adjust the delay here
    } else {
        setTimeout(clearText, 1000); // Wait 1 second and then clear text
    }
}

function clearText() {
    textContainer.textContent = "";
    index = 0;
    setTimeout(addLetter, 1000); // Wait 1 second and then start typing again
}

addLetter();

  