document.addEventListener('DOMContentLoaded', () => {
  // Create sophisticated stars with varied sizes and gentle movement
  function createSophisticatedStar() {
      const star = document.createElement('div');
      star.className = 'star';
      
      const size = Math.random() * 3 + 1; // Random size between 1-4px
      const opacity = Math.random() * 0.7 + 0.3; // Varied opacity
      const animationDuration = Math.random() * 4 + 2; // Random duration 2-6s
      
      star.style.cssText = `
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          width: ${size}px;
          height: ${size}px;
          opacity: ${opacity};
          animation: 
              twinkle ${animationDuration}s infinite alternate,
              float ${animationDuration * 2}s infinite alternate;
      `;
      
      document.querySelector('.stars').appendChild(star);
  }

  // Create subtle sparkle effect
  function createSparkle() {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      
      const size = Math.random() * 10 + 5; // Random size 5-15px
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      
      sparkle.style.cssText = `
          position: absolute;
          left: ${startX}px;
          top: ${startY}px;
          width: ${size}px;
          height: ${size}px;
          background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
          border-radius: 50%;
          opacity: 0;
          animation: sparkleGlow 3s infinite;
      `;

      document.body.appendChild(sparkle);

      setTimeout(() => {
          sparkle.remove();
      }, 3000);
  }

  // Create colorful confetti with more dynamic movement
  function createConfetti() {
      const confettiContainer = document.querySelector('.confetti-container');
      const colors = ['#f2d74e', '#ff9a8b', '#ff6b8b', '#95e1d3', '#eaffd0'];

      for (let i = 0; i < 150; i++) {
          const confetti = document.createElement('div');
          confetti.className = 'confetti';
          confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          confetti.style.left = `${Math.random() * 100}%`;
          
          confettiContainer.appendChild(confetti);

          const animation = confetti.animate([
              { 
                  transform: `translateY(0) rotate(${Math.random() * 360}deg) scale(1)`,
                  opacity: 1
              },
              { 
                  transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 720}deg) scale(0.5)`,
                  opacity: 0
              }
          ], {
              duration: 3000 + Math.random() * 2000,
              delay: Math.random() * 2000,
              easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
          });

          animation.onfinish = () => confetti.remove();
      }
  }

  // Adjust star count based on screen size with more refined generation
  function adjustStarCount() {
      const stars = document.querySelector('.stars');
      stars.innerHTML = ''; 
      const starCount = Math.min(250, Math.floor(window.innerWidth * window.innerHeight / 8000));
      
      for (let i = 0; i < starCount; i++) {
          createSophisticatedStar();
      }
  }

  // Initialize
  adjustStarCount();
  
  // Create sparkles periodically
  const sparkleInterval = setInterval(createSparkle, 500);

  const envelopeContainer = document.querySelector('.envelope-container');
  const envelope = document.querySelector('.envelope');

  // Toggle envelope opening with enhanced interaction
  envelopeContainer.addEventListener('click', function() {
      envelope.classList.toggle('opened');
      
      // Trigger confetti and stop sparkles when opened
      if (envelope.classList.contains('opened')) {
          createConfetti();
          clearInterval(sparkleInterval);
      }
  });

  // Adjust stars on resize
  window.addEventListener('resize', adjustStarCount);
});