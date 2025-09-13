// Sparkle animation
const sparkleColors = ['#ff4d6d', '#e63946', '#f7e9e3', '#ffb3c6', '#fff'];
function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  const color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
  const left = Math.random() * 100;
  const top = 10 + Math.random() * 80;
  const duration = 2.5 + Math.random() * 2.5;
  sparkle.style.left = left + 'vw';
  sparkle.style.top = top + 'vh';
  sparkle.style.animationDuration = duration + 's';
  sparkle.innerHTML = `<svg viewBox="0 0 12 12" fill="${color}" xmlns="http://www.w3.org/2000/svg"><polygon points="6,0 7,4 11,6 7,8 6,12 5,8 1,6 5,4"/></svg>`;
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), duration * 1000);
}
setInterval(createSparkle, 600);
for (let i = 0; i < 8; i++) setTimeout(createSparkle, i * 300);



 const magicWord = "danielle";

    let slideIndex = 0;
    let slides, dots;
    const transitionTime = 300;
    const slideIntervalTime = 1000;
    let slideInterval = null;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.opacity = (i === index) ? "1" : "0";
        slide.style.zIndex = (i === index) ? "2" : "1";
      });

      if (dots.length) {
        dots.forEach((dot, i) => {
          dot.classList.toggle("active", i === index);
        });
      }
    }

    function nextSlide() {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    }

    function goToSlide(index) {
      slideIndex = index;
      showSlide(slideIndex);
      resetSlideInterval();
    }

    function resetSlideInterval() {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
      slideInterval = setInterval(nextSlide, slideIntervalTime);
    }

    function initSlideshow() {
      slides = document.querySelectorAll(".slide");
      dots = document.querySelectorAll(".dot");

      slides.forEach(slide => {
        slide.style.opacity = "0";
        slide.style.transition = `opacity ${transitionTime}ms ease-in-out`;
        slide.style.position = "absolute";
        slide.style.top = "0";
        slide.style.left = "0";
        slide.style.width = "100%";
        slide.style.height = "100%";
      });

      slideIndex = 0;
      showSlide(slideIndex);
      slideInterval = setInterval(nextSlide, slideIntervalTime);
    }

    function checkMagicWord() {
      const input = document.getElementById("magicWordInput").value.trim().toLowerCase();
      const errorText = document.getElementById("errorText");

      if (input === magicWord) {
        errorText.textContent = "";
        const kissAlert = document.getElementById("kissAlert");
        kissAlert.style.display = "flex";

        setTimeout(() => {
          kissAlert.style.display = "none";
          document.getElementById("lockScreen").style.display = "none";
          document.getElementById("mainContent").style.display = "block";
          document.getElementById("bg-music").play();
          initSlideshow();
          setupClickMeModal();
        }, 2500);
      } else {
        errorText.textContent = "Oops! That's not the magic word. Try again.";
      }
    }

    

    