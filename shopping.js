
let shoppingCart = [];

window.onload = function() {
    const storedCart = localStorage.getItem('shoppingCart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
        updateCartCount(); // Add this line to update the cart count on page load
        displayCart();
    }
};

function buy(productName, productPrice, productImage) {
    shoppingCart.push({ name: productName, price: productPrice, image: productImage });

    updateCartCount(); // Add this line to update the cart count when a new item is added
    updateCart();
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = shoppingCart.length.toString();
}

function updateCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    displayCart();
}



document.addEventListener("DOMContentLoaded", function () {
    // Get all product containers
    const productContainers = document.querySelectorAll('.box.item');

    // Get the search input element
    const searchInput = document.getElementById('searchInput');

    // Add an input event listener to the search input
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();

        // Loop through each product container
        productContainers.forEach(function (container) {
            const productName = container.querySelector('.yeww p').textContent.toLowerCase();

            // Show or hide the product based on the search term
            if (productName.includes(searchTerm)) {
                container.style.display = 'block';
            } else {
                container.style.display = 'none';
            }
        });
    });
});





 /* Search Button */

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const planters = document.querySelectorAll(".yeww");

    if (!searchInput || !planters.length) {
        console.error("Search input or planters not found.");
        return;
    }

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();

        planters.forEach(function (yeww) {
            const title = yeww.querySelector(".title").textContent.toLowerCase();
            const description = yeww.querySelector(".description").textContent.toLowerCase();

            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                yeww.style.display = "block";
            } else {
                yeww.style.display = "none";
            }
        });
    });
});




