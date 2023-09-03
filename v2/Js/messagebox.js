
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