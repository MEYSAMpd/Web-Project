async function loadHeader() {
    const response = await fetch("partials/header.html");
    const data = await response.text();

    document.getElementById("header-placeholder").innerHTML = data;
}

async function loadFooter() {
    const response = await fetch("partials/footer.html");
    const data = await response.text();

    document.getElementById("footer-placeholder").innerHTML = data;
}

async function init() {
    await loadHeader();
    await loadFooter();

    setupNavbar();

    if (typeof initializePage === "function") {
        await initializePage();
    }
}

init();

function setupNavbar() {
    // Menu items click
    const navItems = document.querySelectorAll(".header nav ul li");

    navItems.forEach(item => {
        item.addEventListener("click", function () {
            const targetPage = this.dataset.page;
            if (targetPage) {
                window.location.href = targetPage;
            }
        });
    });

    // Hamburger
    const hamburger = document.getElementById("hamburgerBtn");
    const nav = document.getElementById("mainNav");

    if (hamburger && nav) {

        hamburger.addEventListener("click", function (e) {
            e.stopPropagation();

            this.classList.toggle("active");
            nav.classList.toggle("open");
        });

        document.addEventListener("click", function (e) {
            if (
                nav.classList.contains("open") &&
                !nav.contains(e.target) &&
                !hamburger.contains(e.target)
            ) {
                nav.classList.remove("open");
                hamburger.classList.remove("active");
            }
        });
    }
}

fetch("partials/tryThis.html")
    .then(res => res.text())
    .then(html => {
        const el = document.getElementById("tryThis-placeholder");
        if (!el) return;

        el.innerHTML = html;
        initTryThisCarousel();
    });

fetch("partials/sub.html")
    .then(res => res.text())
    .then(html => {
        const el = document.getElementById("sub-placeholder");

        if (!el) return;

        el.innerHTML = html;

        initNewsletter();
    });

function initTryThisCarousel() {
    const carousel = document.querySelector("[data-trythis-carousel]");
    if (!carousel) return;

    const track = carousel.querySelector(".tryThis-track");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    const getScrollAmount = () => {
        const firstCard = track.querySelector(".tryThis-item");
        if (!firstCard) return 300;

        return window.innerWidth <= 768
            ? firstCard.offsetWidth + 20
            : firstCard.offsetWidth + 40;
    };

    if (prevBtn) {
        prevBtn.addEventListener("click", function () {
            track.scrollBy({
                left: -getScrollAmount(),
                behavior: "smooth"
            });
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", function () {
            track.scrollBy({
                left: getScrollAmount(),
                behavior: "smooth"
            });
        });
    }
}

document.addEventListener("click", function (e) {
    const card = e.target.closest(".tryThis-item, .recipe-card, .post-card, .tasty-item");

    if (card && card.dataset.page) {
        window.location.href = card.dataset.page;
    }

    const button = e.target.closest(".custom-button");

    if (button && button.dataset.page) {
        window.location.href = button.dataset.page;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    initTryThisCarousel();
});

function showError(message, containerId) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = `
        <div class="error-message">
            ${message}
        </div>
    `;
}


function initNewsletter() {

    const newsletterForm = document.querySelector("#newsletter-form");

    if (!newsletterForm)
        return;

    newsletterForm.addEventListener("submit", handleNewsletter);
}


async function handleNewsletter(e) {

    e.preventDefault();

    const input = document.querySelector("#newsletter-email");
    const button = document.querySelector("#newsletter-btn");

    const email = input.value.trim();

    if (!email) {
        alert("Please enter your email.");
        return;
    }

    button.disabled = true;
    button.textContent = "Loading...";

    try {

        const result = await subscribe(email);

        alert(result.message || "Subscribed successfully!");

        input.value = "";

    }
    catch (error) {

        alert(error.message || "Subscription failed.");

    }
    finally {

        button.disabled = false;
        button.textContent = "Subscribe";

    }

}