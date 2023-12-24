function displayCart() {
    const cartContainer = document.getElementById('cart-container');
    const totalContainer = document.getElementById('total-container');

    // Retrieve the shopping cart from localStorage
    const storedCart = localStorage.getItem('shoppingCart');

    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);

        // Clear the previous content in the cart container
        cartContainer.innerHTML = "";

        // Loop through the items in the shopping cart and display them
        for (let i = 0; i < shoppingCart.length; i++) {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');

            // Add the item image
            const itemImage = document.createElement('img');
            itemImage.src = shoppingCart[i].image;
            itemImage.alt = shoppingCart[i].name;
            itemImage.classList.add('item-image');
            cartItemDiv.appendChild(itemImage);

            // Add the item details
            const itemDetailsDiv = document.createElement('div');
            itemDetailsDiv.classList.add('item-details');

            const itemName = document.createElement('p');
            itemName.textContent = shoppingCart[i].name;
            itemName.classList.add('item-name');
            itemDetailsDiv.appendChild(itemName);

            const itemPrice = document.createElement('p');
            itemPrice.textContent = `₹${shoppingCart[i].price}`;
            itemPrice.classList.add('item-price');
            itemDetailsDiv.appendChild(itemPrice);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-button');
            deleteButton.onclick = function () {
                deleteItem(i);
            };
            itemDetailsDiv.appendChild(deleteButton);

            cartItemDiv.appendChild(itemDetailsDiv);
            cartContainer.appendChild(cartItemDiv);
        }

        // Calculate the total amount
        const totalAmount = shoppingCart.reduce((total, item) => total + item.price, 0);

        // Display the total amount and checkout button
        totalContainer.innerHTML = `
            <p>Total Amount: ₹${totalAmount}</p>
        `;
    }
}

function reviewOrder() {
    // Call displayCart to show the items in the shopping cart
    displayCart();

    // Scroll to the order summary section
    document.getElementById('order-summary').style.display = 'block';
    document.getElementById('order-summary').scrollIntoView({
        behavior: 'smooth'
    });
}

function deleteItem(index) {
    const storedCart = localStorage.getItem('shoppingCart');

    if (storedCart) {
        let shoppingCart = JSON.parse(storedCart);

        // Remove the item at the specified index
        shoppingCart.splice(index, 1);

        // Update the local storage with the modified cart
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));

        // Refresh the displayed cart
        displayCart();
    }
}

function placeOrder() {
    const addressInput = document.getElementById('address-input').value;

    // Check if the address is provided
    if (addressInput.trim() === "") {
        alert("Please enter your delivery address.");
    } else {
        // Place the order (you can implement further processing here)
        alert("Order placed successfully!\n\n No return of items after ordered \n\nAddress:" + addressInput);
        alert("Happy Shopping❤️!! \n\nVisit Again !!\n\nLet's Go Green🌿")
    }
}

window.onload = displayCart;

        
        