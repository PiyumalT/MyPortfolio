//about me text animation
const textContainer = document.getElementById("animatedText");
const text = "I'm currently a student with a knack for full-stack development.";
let index = 0;

function addLetter() {
    if (index < text.length) {
        textContainer.textContent += text[index];
        index++;
        setTimeout(addLetter, 50); // Adjust the delay here
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