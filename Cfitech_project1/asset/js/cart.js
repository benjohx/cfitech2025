document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.querySelector(".cart-items");
    const cartTotal = document.querySelector(".cart-total");

    function renderCart() {
        cartItemsContainer.innerHTML = "";
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
            cartTotal.textContent = "€0.00";
            return;
        }

        cart.forEach((item, index) => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <p>${item.name} (Size: ${item.size}) x ${item.quantity}</p>
                <p>€${(item.price * item.quantity).toFixed(2)}</p>
                <button class="remove-item" data-index="${index}">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);
            total += item.price * item.quantity;
        });

        cartTotal.textContent = `€${total.toFixed(2)}`;
        attachRemoveItemEvents();
    }

    function attachRemoveItemEvents() {
        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                cart.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
                renderCart();
            });
        });
    }

    renderCart();
});
