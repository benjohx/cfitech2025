function toggleTheme() {
  document.body.classList.toggle("dark");
}
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(button => {
    button.style.display = "inline-block";
    button.style.marginTop = "1.5rem";
    button.style.textDecoration = "none";
    button.style.fontWeight = "600";
    button.style.padding = "10px 20px";
    button.style.backgroundColor = "#1de9b6";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "20px";
    button.style.cursor = "pointer";
    button.style.boxShadow = "0 5px 15px rgba(255, 0, 0, 0.2)";
    button.style.transition = "transform 0.2s";

    // Optional: Add a hover effect with JavaScript
    button.addEventListener("mouseenter", () => {
      button.style.transform = "scale(1.05)";
      button.style.backgroundColor = "rgba(255, 0, 0, 0.6)";
    });
    button.addEventListener("mouseleave", () => {
      button.style.transform = "scale(1)";
      button.style.backgroundColor = "#1de9b6";
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");

  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      link.style.borderBottom = "2px solid #1de9b6";
    });
    link.addEventListener("mouseleave", () => {
      link.style.borderBottom = "none";
    });
  });
});

// registrationform animation

document.getElementById("mostraForm").addEventListener("mouseenter", function () {
  const contenitore = document.getElementById("contenitoreForm");

  // Show form container
  contenitore.classList.add("visible");

  // Inject form content
  contenitore.innerHTML = `
    <form id="formPrenotazione">
      <!-- Login Card -->
      <div class="card">
        <i class="fa-solid fa-xmark close"></i>
        <h2>Login</h2>
        <label for="login-username">Username</label>
        <input id="login-username" type="text" required>

        <label for="login-password">Password</label>
        <input id="login-password" type="password" required>

        <button type="submit">Login</button>
      </div>

      <!-- Register Card -->
      <div class="card">
        <i class="fa-solid fa-xmark close"></i>
        <h2>S'inscrire</h2>
        <label for="register-username">Username</label>
        <input id="register-username" type="text" required>

        <label for="register-password">Password</label>
        <input id="register-password" type="password" required>

        <label for="register-confirm">Confirm Password</label>
        <input id="register-confirm" type="password" required>

        <button type="submit">Register</button>
      </div>
    </form>
  `;

  // Hide form on mouse leave
  contenitore.addEventListener("mouseleave", () => {
    contenitore.classList.remove("visible");
    contenitore.innerHTML = '';
  });
});

// Hover animation for feature cards
  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
      card.style.boxShadow = '0 12px 25px rgba(0, 0, 0, 0.15)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
    });
  });

  // Hover animation for the Learn More button
  const learnBtn = document.querySelector('.learn-btn');

  learnBtn.addEventListener('mouseenter', () => {
    learnBtn.style.transform = 'scale(1.05)';
    learnBtn.style.background = 'rgba(255, 255, 255, 0.4)';
  });

  learnBtn.addEventListener('mouseleave', () => {
    learnBtn.style.transform = 'scale(1)';
    learnBtn.style.background = 'rgba(255, 255, 255, 0.2)';
  });

// Smooth stats update animation
const counters = document.querySelectorAll('.count');

  const animateCounters = () => {
    counters.forEach(counter => {
      counter.innerText = '0';
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 100;

        if (current < target) {
          counter.innerText = `${Math.ceil(current + increment)}`;
          setTimeout(updateCounter, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });
  };

  // Trigger animation when in view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.disconnect(); // run once
      }
    });
  });

  observer.observe(document.querySelector('.stats-section'));

  // menu food card animation
  const filterItems = document.querySelectorAll('.menu-filter li');
  const menuCards = document.querySelectorAll('.menu-card');

  filterItems.forEach(item => {
    item.addEventListener('click', () => {
      document.querySelector('.menu-filter li.active').classList.remove('active');
      item.classList.add('active');

      const category = item.getAttribute('data-category');

      menuCards.forEach(card => {
        if (card.getAttribute('data-category') === category || category === "all") {
          card.style.display = "block";
          card.style.opacity = 0;
          card.style.transform = "scale(1.95)";
          setTimeout(() => {
            card.style.opacity = 2;
            card.style.transform = "scale(1)";
          }, 100);
        } else {
          card.style.opacity = 2;
          card.style.transform = "scale(0.95)";
          setTimeout(() => {
            card.style.display = "none";
          }, 70);
        }
      });
    });
  });

  // testimonial slider
    let currentSlide = 0;
        const slides = document.querySelectorAll('.testimonial-slide');
        const totalSlides = slides.length;

        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            currentSlide = (n + totalSlides) % totalSlides;
            slides[currentSlide].classList.add('active');
        }

        document.querySelector('.prev').addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });

        document.querySelector('.next').addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });

        // Auto-advance slides every 8 seconds
        let autoSlide = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 8000);

        // Pause auto-advance on hover
        const sliderContainer = document.querySelector('.slider-container');
        sliderContainer.addEventListener('mouseenter', () => {
            clearInterval(autoSlide);
        });
        sliderContainer.addEventListener('mouseleave', () => {
            autoSlide = setInterval(() => {
                showSlide(currentSlide + 1);
            }, 8000);
        });

        // Gallery slider with the first slide
    