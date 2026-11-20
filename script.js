
// =================================
// MITHAAS - WEBSITE JAVASCRIPT
// =================================


// 1. Get HTML elements

const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

const quantityDisplay = document.getElementById("quantity");

const productSelect = document.getElementById("product");
const totalDisplay = document.getElementById("total");

const orderForm = document.getElementById("orderForm");
const customerName = document.getElementById("customerName");


// 2. Initial quantity

let quantity = 1;


// 3. Function to calculate total price

function calculateTotal() {

    // Get the selected product's price
    let selectedOption = productSelect.options[productSelect.selectedIndex];

    let price = Number(selectedOption.dataset.price);

    // Calculate total amount
    let total = price * quantity;

    // Display total amount
    totalDisplay.textContent = total;

}


// 4. Increase quantity

increaseButton.addEventListener("click", function() {

    if (quantity < 20) {

        quantity++;

        quantityDisplay.textContent = quantity;

        calculateTotal();

    } else {

        alert("Maximum order quantity is 20!");

    }

});


// 5. Decrease quantity

decreaseButton.addEventListener("click", function() {

    if (quantity > 1) {

        quantity--;

        quantityDisplay.textContent = quantity;

        calculateTotal();

    }

});


// 6. Update total when product changes

productSelect.addEventListener("change", function() {

    calculateTotal();

});


// 7. Handle order form submission

orderForm.addEventListener("submit", function(event) {

    event.preventDefault();

    if (customerName.value.trim() === "") {
        alert("Please enter your name!");
        return;
    }

    if (productSelect.value === "") {
        alert("Please select a product!");
        return;
    }

    // Show success message
    const successMessage = document.getElementById("successMessage");

    successMessage.style.display = "block";

    // Hide success message after 5 seconds
setTimeout(function() {
    successMessage.style.display = "none";
}, 5000);

    successMessage.innerHTML =
        "<h3>🎉 Order Successful!</h3>" +
        "<p>Thank you, " + customerName.value + "!</p>" +
        "<p>Product: " + productSelect.value + "</p>" +
        "<p>Quantity: " + quantity + "</p>" +
        "<p>Total Amount: ₹" + totalDisplay.textContent + "</p>" +
        "<p>Thank you for choosing MITHAAS!</p>";

    // Reset form
    orderForm.reset();

    quantity = 1;
    quantityDisplay.textContent = quantity;
    totalDisplay.textContent = 0;

});