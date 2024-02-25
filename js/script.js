/* Modal */
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeButton = document.querySelector(".closeModal");

function openModal(imageSrc) {
    modal.style.display = "block";
    modalImg.src = imageSrc;
    console.log(openModal);
}

function closeModal() {
    modal.style.display = "none";
    console.log(closeModal);
}

document.querySelector(".modal-container").addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.tagName === "IMG") {
        openModal(e.target.src);
    }
});

document.querySelector(".modal-container-2").addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.tagName === "IMG") {
        openModal(e.target.src);
    }
});

document.querySelector(".modal-container-3").addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.tagName === "IMG") {
        openModal(e.target.src);
    }
});

closeButton.addEventListener("click", closeModal);

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

/* Nav Menu */
function toggleMenu() {
    const menuMobile = document.getElementById("menu-mobile")

    if(menuMobile.className === "menu-mobile-active") {
        menuMobile.className = "menu-mobile"
    } else {
        menuMobile.className = "menu-mobile-active"
    }
}

