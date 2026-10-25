
/* ==========================================
   MAISON DE SUCRE — COMPLETE JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Maison de Sucre website is ready!");

    /* ==========================================
       1. PRODUCT PRICE CALCULATOR
    ========================================== */

    document.querySelectorAll("[data-price]").forEach(function (card) {

        const price = Number(card.dataset.price);
        const quantityInput = card.querySelector('input[type="number"]');
        const totalDisplay = card.querySelector(".product-total");

        if (!quantityInput || !totalDisplay || !Number.isFinite(price)) {
            return;
        }

        function calculateTotal() {
            const quantity = Number(quantityInput.value);
            const min = Number(quantityInput.min || 1);
            const max = Number(quantityInput.max || 20);

            if (
                !Number.isInteger(quantity) ||
                quantity < min ||
                quantity > max
            ) {
                totalDisplay.textContent = "Enter a valid quantity";
                return;
            }

            totalDisplay.textContent =
                (price * quantity).toLocaleString("en-IN");
        }

        quantityInput.addEventListener("input", calculateTotal);
        calculateTotal();
    });


    /* ==========================================
       2. PRODUCT CATEGORY FILTERS
    ========================================== */

    const filterButtons = document.querySelectorAll("[data-filter]");
    const productCards = document.querySelectorAll("[data-category]");

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const category = button.dataset.filter;

            productCards.forEach(function (card) {

                card.hidden =
                    category !== "all" &&
                    card.dataset.category !== category;

            });

            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");
        });
    });


    /* ==========================================
       3. ADD TO ORDER
    ========================================== */

    let bakeryOrder = [];

    function updateOrderSummary() {

        const orderContainer = document.querySelector("#order-summary");
        const grandTotalDisplay = document.querySelector("#order-grand-total");

        if (!orderContainer) {
            console.log("Current order:", bakeryOrder);
            return;
        }

        orderContainer.replaceChildren();

        bakeryOrder.forEach(function (item) {

            const row = document.createElement("p");

            row.textContent =
                `${item.name} × ${item.quantity} = ₹` +
                (item.price * item.quantity).toLocaleString("en-IN");

            orderContainer.appendChild(row);
        });

        const grandTotal = bakeryOrder.reduce(function (sum, item) {
            return sum + item.price * item.quantity;
        }, 0);

        if (grandTotalDisplay) {
            grandTotalDisplay.textContent =
                grandTotal.toLocaleString("en-IN");
        }
    }

    document.querySelectorAll("[data-add-to-order]").forEach(function (button) {

        button.addEventListener("click", function () {

            const card = button.closest("[data-product]");
            const name = button.dataset.addToOrder;

            if (!card) {
                alert("Product card is not configured correctly.");
                return;
            }

            const price = Number(card.dataset.price);
            const quantityInput = card.querySelector('input[type="number"]');
            const quantity = quantityInput ? Number(quantityInput.value) : 1;

            if (
                !name ||
                !Number.isFinite(price) ||
                !Number.isInteger(quantity) ||
                quantity < 1 ||
                quantity > 20
            ) {
                alert("Please check the product and quantity.");
                return;
            }

            const existing = bakeryOrder.find(function (item) {
                return item.name === name;
            });

            if (existing) {
                existing.quantity += quantity;
            } else {
                bakeryOrder.push({
                    name: name,
                    price: price,
                    quantity: quantity
                });
            }

            updateOrderSummary();

            alert(name + " added to your order!");
        });
    });


    /* ==========================================
       4. PRE-ORDER PICKUP DATE VALIDATION
    ========================================== */

    const today = new Date();

    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");

    const todayString = `${yyyy}-${mm}-${dd}`;

    document.querySelectorAll('form input[type="date"]').forEach(function (input) {
        input.min = todayString;
    });


    /* ==========================================
       5. PRE-ORDER FORM VALIDATION
    ========================================== */

    const preorderForm = document.querySelector(
        "#preorder-form, .preorder-form"
    );

    if (preorderForm) {

        preorderForm.addEventListener("submit", function (event) {

            if (!preorderForm.checkValidity()) {
                event.preventDefault();
                preorderForm.reportValidity();
                return;
            }

            const dateInput = preorderForm.querySelector('input[type="date"]');

            if (dateInput && dateInput.value < todayString) {
                event.preventDefault();
                alert("Please select today or a future pickup date.");
                return;
            }

            // Prevent a fake successful submission.
            event.preventDefault();

            alert(
                "Your form is valid! Online order submission is not connected yet."
            );
        });
    }


    /* ==========================================
       6. CONTACT FORM VALIDATION
    ========================================== */

    const contactForm = document.querySelector(
        "#contact-form, .contact-form"
    );

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            if (!contactForm.checkValidity()) {
                event.preventDefault();
                contactForm.reportValidity();
                return;
            }

            event.preventDefault();

            alert(
                "Your message passed validation, but message delivery is not connected yet."
            );
        });
    }


    /* ==========================================
       7. MOBILE NAVIGATION
    ========================================== */

    const menuButton = document.querySelector("#menu-toggle");
    const navigation = document.querySelector("#main-nav");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            const expanded =
                menuButton.getAttribute("aria-expanded") === "true";

            menuButton.setAttribute("aria-expanded", String(!expanded));

            navigation.classList.toggle("open");
        });
    }


    /* ==========================================
       8. BACK TO TOP BUTTON
    ========================================== */

    const backToTop = document.querySelector("#back-to-top");

    if (backToTop) {

        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    /* ==========================================
       9. CURRENT YEAR IN FOOTER
    ========================================== */

    document.querySelectorAll(".current-year").forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });

});
