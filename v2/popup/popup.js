const openPopupButton = document.getElementById("openPopupButton");
const popupContainer = document.getElementById("popupContainer");

openPopupButton.addEventListener("click", () => {
    popupContainer.style.display = "block"; // Show the popup when the button is clicked
});

// Function to close the popup
function closePopup() {
    popupContainer.style.display = "none";
}

// Close the popup when clicking outside of it or using an additional close button
popupContainer.addEventListener("click", (event) => {
    if (event.target === popupContainer) {
        closePopup();
    }
});