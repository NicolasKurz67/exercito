const openModalBtn = document.querySelector("#open-modal");
const closeModalBtn = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
}

[openModalBtn, closeModalBtn, fade].forEach((el) => {
    el.addEventListener("click", ()=> toggleModal());
})