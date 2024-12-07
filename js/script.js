document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.article-container');
  const slides = document.querySelectorAll('.article-slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentPosition = 0;
  const slidesToShow = 2;
  const slideWidth = 100 / slidesToShow; // Pourcentage de largeur pour chaque slide

  // Mise à jour de la position des slides
  function updateSlides() {
      slides.forEach(slide => {
          slide.style.transform = `translateX(${-currentPosition * slideWidth}%)`;
      });

      // Gestion de l'état des boutons
      prevBtn.style.opacity = currentPosition === 0 ? '0.5' : '1';
      nextBtn.style.opacity = currentPosition >= slides.length - slidesToShow ? '0.5' : '1';
  }

  // Événement bouton précédent
  prevBtn.addEventListener('click', () => {
      if (currentPosition > 0) {
          currentPosition--;
          updateSlides();
      }
  });

  // Événement bouton suivant
  nextBtn.addEventListener('click', () => {
      if (currentPosition < slides.length - slidesToShow) {
          currentPosition++;
          updateSlides();
      }
  });

  // Initialisation
  updateSlides();
});
  
  document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Afficher le bouton quand on défile vers le bas
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Revenir en haut quand on clique sur le bouton
    scrollToTopBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du lien
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Défilement fluide
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
  const playButton = document.getElementById('podcastPlayButton');
  const audio = document.getElementById('podcastAudio');
  const icon = playButton.querySelector('img');
  let isPlaying = false;

  playButton.addEventListener('click', function(e) {
      e.preventDefault();

      if (!isPlaying) {
          audio.play();
          icon.src = "../img/barre.png"; // Changé pour correspondre à votre nom de fichier
      } else {
          audio.pause();
          icon.src = "../img/play1.png";
      }
      
      isPlaying = !isPlaying;
  });

  // Réinitialiser quand l'audio se termine
  audio.addEventListener('ended', function() {
      isPlaying = false;
      icon.src = "../img/play1.png";
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const articleMenu = document.getElementById('articleMenu');
  
  window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
          articleMenu.style.display = "block";
      } else {
          articleMenu.style.display = "none";
      }
  });
});