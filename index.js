const prevButtons = document.querySelectorAll(".btn-prev");
const nextButttons = document.querySelectorAll(".btn-next");
const firstTs = document.querySelector(".first-testimonial");
const secondTs = document.querySelector(".second-testimonial");

prevButtons.forEach((prevBtn) => {
   prevBtn.addEventListener("click", () => {
      firstTs.classList.toggle("active");
      secondTs.classList.toggle("second-testimonial");
   });
});

nextButttons.forEach((nextBtn) => {
   nextBtn.addEventListener("click", () => {
      firstTs.classList.toggle("active");
      secondTs.classList.toggle("second-testimonial");
   });
});
