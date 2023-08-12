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


  