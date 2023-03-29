window.onload = function() {
    // Create an array of star elements
    const stars = [];

    // Create stars and add them to the page
    for (let i = 0; i < 500; i++) {
      const star = document.createElement("div");
      star.classList.add("additional-star");
      star.style.width = Math.random() * 2 + "px";
      star.style.height = star.style.width;
      star.style.left = Math.random() * window.innerWidth + "px";
      star.style.top = Math.random() * window.innerHeight + "px";
      document.querySelector(".additional-stars").appendChild(star);
      stars.push(star);
    }

    /* Add shooting stars to the page */
function addShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.classList.add('shooting-star');
    shootingStar.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
    shootingStar.style.top = `${Math.floor(Math.random() * 400)}px`;
    shootingStar.style.setProperty('--size', Math.floor(Math.random() * 3) + 2);
    shootingStar.style.setProperty('--tail-length', Math.floor(Math.random() * 20) + 10);
    shootingStar.style.setProperty('--duration', Math.floor(Math.random() * 3) + 1);
    shootingStar.style.setProperty('--delay', Math.floor(Math.random() * 5));
    document.querySelector('.stars').appendChild(shootingStar);
    setTimeout(() => {
      shootingStar.remove();
    }, 5000);
  }
  setInterval(addShootingStar, 8000);

  function moveStars() {
    stars.forEach(function(star) {
      // Check if the current star is a shooting star
      if (star.classList.contains('shooting-star')) {
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);
        const duration = Math.floor(Math.random() * 3) + 1;
        const delay = Math.floor(Math.random() * 5);
        const trailDuration = Math.floor(Math.random() * 3) + 1;
        const trailDelay = delay + duration;
        star.style.transition = `transform ${duration}s linear ${delay}s, opacity ${trailDuration}s ease-in-out ${trailDelay}s`;
        star.style.transform = `translate(${x}px, ${y}px)`;
        star.style.opacity = 0;
      } else {
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);
        const duration = Math.floor(Math.random() * 10) + 5;
        const delay = Math.floor(Math.random() * 5);
        star.style.transition = `transform ${duration}s linear ${delay}s`;
        star.style.transform = `translate(${x}px, ${y}px)`;
      }
    });
    requestAnimationFrame(moveStars);
  }
  requestAnimationFrame(moveStars);
  
}
const sphere = document.querySelector('.sphere');
let rotation = 0;

function rotate() {
  rotation += 0.5; // Replace with desired rotation speed
  sphere.style.transform = `rotateY(${rotation}deg)`;
  requestAnimationFrame(rotate);
}

requestAnimationFrame(rotate);


