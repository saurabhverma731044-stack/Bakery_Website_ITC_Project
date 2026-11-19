```javascript
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

    quantity++;

    quantityDisplay.textContent = quantity;

    calculateTotal();

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

    // Prevent the page from refreshing
    event.preventDefault();

    // Check whether a product is selected
    if (productSelect.value === "") {

        alert("Please select a product!");

        return;

    }

    // Display order confirmation
    alert(
        "Thank you, " + customerName.value + "!\n\n" +
        "Your selected product: " + productSelect.value + "\n" +
        "Quantity: " + quantity + "\n" +
        "Total Amount: ₹" + totalDisplay.textContent + "\n\n" +
        "This is a demo order confirmation from MITHAAS."
    );

});
```