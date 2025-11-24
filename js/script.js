const slider = document.getElementById("slider");
const images = document.querySelectorAll(".gallery-img");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let index = 0;
let autoSlide;

// Hitung jumlah slide tampil (responsif)
function slidesPerView() {
  return window.innerWidth < 768 ? 1 : 2;
}

function updateSlide() {
  const slideWidth = slider.children[0].clientWidth + 16;
  slider.style.transform = `translateX(-${index * slideWidth}px)`;
}

// NEXT
next.onclick = () => {
  if (index < images.length - slidesPerView()) { index++; }
  else { index = 0; }
  updateSlide();
};

// PREV
prev.onclick = () => {
  if (index > 0) { index--; }
  else { index = images.length - slidesPerView(); }
  updateSlide();
};

//   // Auto Slide setiap 3 detik
//   function startAutoSlide() {
//     autoSlide = setInterval(() => {
//       next.click();
//     }, 8000);
//   }
//   startAutoSlide();

// FULLSCREEN MODE
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(img => {
  img.onclick = () => {
    lightbox.classList.remove("hidden");
    lightboxImg.src = img.src;
  };
});

// Klik di luar → tutup fullscreen
lightbox.onclick = () => {
  lightbox.classList.add("hidden");
};

// Update slide lagi jika layar di-resize
window.onresize = updateSlide;
