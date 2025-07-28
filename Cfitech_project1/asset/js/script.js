// Swiper Initialization
const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// GLightbox Initialization
const lightbox = GLightbox({
  selector: '.glightbox',
  touchNavigation: true,
});


// GSAP Animations
gsap.from(".hero-content", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power2.out"
});

gsap.from(".event-slide", {
  scrollTrigger: ".events",
  duration: 0.8,
  y: 100,
  opacity: 0,
  stagger: 0.2,
  ease: "back.out(1.7)"
});
// Optional: Pause animation on hover
document.querySelector('.ambassadors-track').addEventListener('mouseenter', () => {
  document.querySelector('.ambassadors-track').style.animationPlayState = 'paused';
});

document.querySelector('.ambassadors-track').addEventListener('mouseleave', () => {
  document.querySelector('.ambassadors-track').style.animationPlayState = 'running';
});
// Category Filtering
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.dataset.filter;
      document.querySelectorAll('.product-card').forEach(card => {
          if (filter === 'all' || card.dataset.category === filter) {
              card.style.display = 'block';
          } else {
              card.style.display = 'none';
          }
      });
  });
});

// Quick View Modal Functionality
document.querySelectorAll('.quick-view').forEach(button => {
  button.addEventListener('click', () => {
      const productCard = button.closest('.product-card');
      const productImage = productCard.querySelector('img').src;
      const productName = productCard.querySelector('h3').innerText;
      const productPrice = productCard.querySelector('.price').innerText;

      document.getElementById('modalImage').src = productImage;
      document.getElementById('modalTitle').innerText = productName;
      document.getElementById('modalPrice').innerText = productPrice;
      document.getElementById('modalDescription').innerText = "A premium-quality product perfect for night vibes!";

      document.getElementById('quickViewModal').style.display = "flex";
  });
});

// Close Modal
document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('quickViewModal').style.display = "none";
});

window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
      document.getElementById('quickViewModal').style.display = "none";
  }
};

// Shopping Cart Functionality
document.addEventListener("DOMContentLoaded", function () {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.querySelector(".cart-count");

  function updateCartCount() {
      cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
  }

  function addToCart(productId, productName, productPrice, productSize) {
      const existingProduct = cart.find(item => item.id === productId && item.size === productSize);
      if (existingProduct) {
          existingProduct.quantity++;
      } else {
          cart.push({ id: productId, name: productName, price: productPrice, size: productSize, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
  }

  document.querySelectorAll(".add-to-cart").forEach(button => {
      button.addEventListener("click", function () {
          const productCard = this.closest(".product-card");
          const productId = this.getAttribute("data-product");
          const productName = productCard.querySelector("h3").textContent;
          const productPrice = parseFloat(productCard.querySelector(".price").textContent.replace("€", ""));
          const productSize = productCard.querySelector(".size-select").value;
          addToCart(productId, productName, productPrice, productSize);
      });
  });

  updateCartCount();
});


// Initialize Cart Display
updateCartDisplay();
