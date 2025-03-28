// === STICKY HEADER: Hide on scroll down, show on scroll up ===
let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY && window.scrollY > 100) {
    // Cuộn xuống
    header.classList.add("hide-header");
  } else {
    // Cuộn lên hoặc ở đầu trang
    header.classList.remove("hide-header");
  }

  lastScrollY = window.scrollY;
});
