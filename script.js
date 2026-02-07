document.getElementById('bloomBtn').addEventListener('click', () => {
  for (let i = 0; i < 20; i++) {
    let flower = document.createElement('div');
    flower.innerHTML = '🌹';
    flower.style.position = 'absolute';
    flower.style.left = Math.random() * window.innerWidth + 'px';
    flower.style.top = Math.random() * window.innerHeight + 'px';
    flower.style.fontSize =  Math.random() * 40 + 20 + 'px';
    flower.style.transition = '3s ease';
    document.getElementById('flowers').appendChild(flower);
    setTimeout(() => {
      flower.style.top = window.innerHeight + 'px';
      flower.style.opacity = 0;
    }, 100);
    const btn = document.getElementById("bloomBtn");
const music = document.getElementById("bgMusic");

btn.addEventListener("click", () => {
  music.muted = false;
  music.volume = 1;
  music.play();
});
const emojis = ["🌸", "🌹", "💗", "✨", "🫶"];

function createFalling() {
  const fall = document.createElement("div");
  fall.classList.add("fall");
  fall.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  fall.style.left = Math.random() * 100 + "vw";
  fall.style.animationDuration = (Math.random() * 3 + 4) + "s";
  fall.style.fontSize = (Math.random() * 10 + 20) + "px";

  document.getElementById("falling-container").appendChild(fall);

  setTimeout(() => {
    fall.remove();
  }, 8000);
}

setInterval(createFalling, 300);


const galleryImages = document.querySelectorAll(".gallery img");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
const hugBtn = document.getElementById("hugBtn");
const hugModal = document.getElementById("hugModal");

hugBtn.addEventListener("click", () => {
  hugModal.style.display = "flex";
});

hugModal.addEventListener("click", () => {
  hugModal.style.display = "none";
});
hugBtn.addEventListener("click", () => {
  hugModal.style.display = "flex";
  if (music) music.volume = 0.3;
});

hugModal.addEventListener("click", () => {
  hugModal.style.display = "none";
  if (music) music.volume = 1;
});




  }
});
