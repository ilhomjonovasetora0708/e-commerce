// CART COUNTER

let cartCount = 0;

const cartCounter = document.getElementById("cart-count");
const addButtons = document.querySelectorAll(".add-cart");

addButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cartCounter.textContent = cartCount;

        button.innerHTML = "✔ Added";

        button.style.background = "#16a34a";

        setTimeout(() => {

            button.innerHTML = "Add To Cart";

            button.style.background = "#2563eb";

        }, 1500);

    });

});

// HERO BUTTON

const shopBtn = document.querySelector(".shop-btn");

shopBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 800,
        behavior: "smooth"
    });

});

// CATEGORY HOVER EFFECT

const categories = document.querySelectorAll(".category-card");

categories.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.background = "#2563eb";
        card.style.color = "white";

        const icon = card.querySelector("i");

        icon.style.color = "white";

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "white";
        card.style.color = "#222";

        const icon = card.querySelector("i");

        icon.style.color = "#2563eb";

    });

});

// NEWSLETTER

const subscribeBtn = document.querySelector(".newsletter button");

subscribeBtn.addEventListener("click", () => {

    const email =
        document.querySelector(".newsletter input");

    if (email.value === "") {

        alert("Please enter your email!");

    } else {

        alert(
            "Thanks for subscribing 🎉"
        );

        email.value = "";

    }

});

// PRODUCT ANIMATION

const products =
    document.querySelectorAll(".product-card");

products.forEach(product => {

    product.addEventListener("click", () => {

        product.style.transform =
            "scale(1.03)";

        setTimeout(() => {

            product.style.transform =
                "scale(1)";

        }, 300);

    });

});

// SALE BUTTON

const saleBtn =
    document.querySelector(".sale button");

saleBtn.addEventListener("click", () => {

    alert(
        "🔥 Summer Sale Activated! Up to 50% OFF"
    );

});

// REVIEW CARDS EFFECT

const reviews =
    document.querySelectorAll(".review");

reviews.forEach(review => {

    review.addEventListener("mouseenter", () => {

        review.style.transform =
            "translateY(-10px)";

        review.style.transition =
            "0.3s";

    });

    review.addEventListener("mouseleave", () => {

        review.style.transform =
            "translateY(0)";

    });

});

console.log("🚀 ShopX E-Commerce Loaded Successfully");