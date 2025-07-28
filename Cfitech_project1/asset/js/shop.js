// shop.js

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
