document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const orderItemsContainer = document.querySelector(".order-items");
    const totalAmount = document.querySelector(".total-amount");
    const completePurchaseBtn = document.getElementById("completePurchase");

    function renderOrderSummary() {
        orderItemsContainer.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("order-item");
            itemElement.innerHTML = `
                <p>${item.name} (Size: ${item.size}) x ${item.quantity}</p>
                <p>€${(item.price * item.quantity).toFixed(2)}</p>
            `;
            orderItemsContainer.appendChild(itemElement);
            total += item.price * item.quantity;
        });

        totalAmount.textContent = `€${total.toFixed(2)}`;
    }

    completePurchaseBtn.addEventListener("click", function () {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const address = document.getElementById("address").value.trim();
        const city = document.getElementById("city").value.trim();
        const payment = document.getElementById("payment").value.trim();

        if (!name || !email || !address || !city || !payment) {
            alert("Please fill in all fields correctly.");
            return;
        }

        alert("Thank you for your purchase! Your order has been placed.");
        localStorage.removeItem("cart"); // Clear the cart
        window.location.href = "shop.html"; // Redirect to shop after purchase
    });

    renderOrderSummary();
});
