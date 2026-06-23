async function loadHeader() {

    const response = await fetch("partials/header.html");
    const data = await response.text();

    document.getElementById("header-placeholder").innerHTML = data;

    setupNavbar();
}

async function loadFooter() {
    const response = await fetch("partials/footer.html");
    const data = await response.text();

    document.getElementById("footer-placeholder").innerHTML = data;

    setupNavbar();
}

function setupNavbar() {
    const navItems = document.querySelectorAll(".header nav ul li");
    navItems.forEach(item => {
        item.addEventListener("click", function () {
            const targetPage = this.dataset.page;
            window.location.href = targetPage;
        });
    });
}

loadHeader();
loadFooter();

fetch('partials/tryThis.html')
    .then(res => res.text())
    .then(html => {
        const el = document.getElementById('tryThis-placeholder');
        if (!el) return;
        el.innerHTML = html;
        initTryThisCarousel();
    }
    );

fetch('partials/sub.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('sub-placeholder').innerHTML = html;
    }
    );


function initTryThisCarousel() {
    const carousel = document.querySelector("[data-trythis-carousel]");
    if (!carousel) return;

    const track = carousel.querySelector(".tryThis-track");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    const getScrollAmount = () => {
        const firstCard = track.querySelector(".tryThis-item");
        if (!firstCard) return 300;
        return firstCard.offsetWidth + 40;
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
});

document.addEventListener("DOMContentLoaded", function () {
    initTryThisCarousel();
});
