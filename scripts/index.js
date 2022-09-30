let bagTotalCount = JSON.parse(localStorage.getItem("ItemsCount")) || 0;
let WishlistTotalCount = JSON.parse(localStorage.getItem("wishlistCount")) || 0;


document.querySelector("#bagCount").innerText = bagTotalCount;
document.querySelector("#wishlistCount").innerText = WishlistTotalCount;

