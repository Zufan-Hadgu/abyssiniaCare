const cancelBtn = document.querySelector(".cancel");
const cancelButtons = document.querySelectorAll(".cancel");

cancelButtons.forEach(cancelBtn => {
  cancelBtn.addEventListener("click", () => {
    cancelBtn.classList.toggle("active"); 
  });
});