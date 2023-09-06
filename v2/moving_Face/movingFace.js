const movingImage = document.getElementById("movingImage");
var moving_image_active = false;

// Function to generate a random position on the screen
let previousRandomPosition = { x: 0, y: 0 }; // Initialize with a position outside the screen

function getRandomPosition() {
    const screenWidth = window.innerWidth - movingImage.clientWidth;
    const screenHeight = window.innerHeight - movingImage.clientHeight;

    // Calculate the minimum distance for a new random position
    const minDistance = 500; // Adjust this value as needed

    let randomX, randomY;

    // Generate a new random position until it's not near the previous one
    do {
        randomX = Math.floor(Math.random() * (screenWidth-1));
        randomY = Math.floor(Math.random() * (screenHeight-1));
    } while (
        Math.abs(randomX - previousRandomPosition.x) < minDistance &&
        Math.abs(randomY - previousRandomPosition.y) < minDistance
    );

    previousRandomPosition = { x: randomX, y: randomY };

    return { x: randomX, y: randomY };
}


// Function to move the image to a random position
function moveImage() {
    if (moving_image_active) {
        const newPosition = getRandomPosition();
        movingImage.style.transition = 'left 0.5s ease, top 0.5s ease';
        movingImage.style.left = newPosition.x + "px";
        movingImage.style.top = newPosition.y + "px";
    }
}


// Add mouseover event listener to the image
movingImage.addEventListener("mouseover", moveImage);
movingImage.addEventListener("onmouseenter", moveImage);

function setMovingImageProperties() {
    const movingImage = document.querySelector('.moving-image');
    const movingImageText = document.getElementById("movingImageText");

    if (movingImage && !moving_image_active) {
        movingImage.style.position = 'fixed';
        movingImage.style.width = '150px';
        movingImage.style.padding = '100px';
        moving_image_active = true;
        if (movingImageText) {
            movingImageText.innerHTML = "Catch it if you can! 😂";
        } 
    } else if (movingImage && moving_image_active) {
        movingImage.style.position = 'static';
        movingImage.style.width = '100px';
        movingImage.style.padding = '0px';
        moving_image_active = false;
        if (movingImageText) {
            movingImageText.innerHTML = "congratulations! you got it. Try Again.  <br>👇";
        } 
    }
}

const intervalId = setInterval(moveImage, 5000);