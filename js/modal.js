window.addEventListener("DOMContentLoaded", () => {
    const openModalBtn = document.querySelector(".btn");
    const closeModalBtn = document.querySelector(".close_modal");
    const modal = document.querySelector(".overlay1");
  
    openModalBtn.addEventListener("click", () => {
      modal.classList.add("show");
    });
    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("show");
    });
  });