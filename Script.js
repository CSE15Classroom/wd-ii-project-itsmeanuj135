const searchBtn = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");

searchBtn.addEventListener("click", () => {
    let searchText = searchInput.value.trim();

    if (searchText === "") {
        alert("Please enter something to search!");
    } else {
        alert("Searching for: " + searchText);

        // Open Amazon search page
        window.open(
            `https://www.amazon.in/s?k=${encodeURIComponent(searchText)}`,
            "_blank"
        );
    }
});

// Enter key support
searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        searchBtn.click();
    }
});

// Cart button
const cartBtn = document.querySelector(".nav-cart");

cartBtn.addEventListener("click", () => {
    alert("Your cart is currently empty.");
});

// Sign In button
const signInBtn = document.querySelector(".nav-signin");

signInBtn.addEventListener("click", () => {
    alert("Sign In feature coming soon!");
});

// Returns & Orders
const orderBtn = document.querySelector(".nav-return");

orderBtn.addEventListener("click", () => {
    alert("Orders page coming soon!");
});

// Shop Now buttons
const shopButtons = document.querySelectorAll(".box-content p");

shopButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        alert("Product page will open soon!");
    });
});

// Welcome message
window.addEventListener("load", () => {
    console.log("Amazon Clone Loaded Successfully!");
});