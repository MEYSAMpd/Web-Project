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
});

// blog post page

document.addEventListener("DOMContentLoaded", function () {
    const postsContainer = document.getElementById("postsContainer");
    const searchInput = document.getElementById("blogSearchInput");
    const searchBtn = document.getElementById("blogSearchBtn");
    const pageButtons = document.querySelectorAll(".page-btn");

    if (!postsContainer || !searchInput || !searchBtn || pageButtons.length === 0) {
        return;
    }

    let currentPage = 1;
    let currentSearch = "";

    const blogPages = {
        1: [
            {
                title: "Crochet Projects for Noodle Lovers",
                page: "blogPostPage.html",
                image: "images/romen.png",
                imageAlt: "romen-img",
                excerpt: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
                author: "Wade Warren",
                authorImage: "images/wade-icon.svg",
                authorAlt: "wade-img",
                date: "12 November 2021"
            },
            {
                title: "10 Vegetarian Recipes To Eat This Month",
                page: "blogPostPage.html",
                image: "images/fruiteSalad.png",
                imageAlt: "fruiteSalad-img",
                excerpt: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
                author: "Robert Fox",
                authorImage: "images/robert-icon.svg",
                authorAlt: "robert-img",
                date: "12 November 2021"
            },
            {
                title: "Full Guide to Becoming a Professional Chef",
                page: "blogPostPage.html",
                image: "images/professionalChef.png",
                imageAlt: "professionalChef-img",
                excerpt: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
                author: "Dianne Russell",
                authorImage: "images/dianne-icon.svg",
                authorAlt: "dianne-img",
                date: "12 November 2021"
            },
            {
                title: "Simple & Delicious Vegetarian Lasagna",
                page: "blogPostPage.html",
                image: "images/lasagna.png",
                imageAlt: "lasagna-img",
                excerpt: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
                author: "Leslie Alexander",
                authorImage: "images/leslie-icon.svg",
                authorAlt: "leslie-img",
                date: "12 November 2021"
            },
            {
                title: "Plantain and Pinto Stew with Aji Verde",
                page: "blogPostPage.html",
                image: "images/plantain.png",
                imageAlt: "plantain-img",
                excerpt: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
                author: "Courtney Henry",
                authorImage: "images/courtney-icon.svg",
                authorAlt: "courtney-img",
                date: "12 November 2021"
            },
            {
                title: "We're Hiring a Communications Assistant!",
                page: "blogPostPage.html",
                image: "images/weAreHiring.png",
                imageAlt: "weAreHiring-img",
                excerpt: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
                author: "Albert Flores",
                authorImage: "images/albert-icon.svg",
                authorAlt: "albert-img",
                date: "12 November 2021"
            }
        ],
        2: [
            {
                title: "We're Hiring a Communications Assistant!",
                page: "blogPostPage.html",
                image: "images/weAreHiring.png",
                imageAlt: "weAreHiring-img",
                excerpt: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
                author: "Albert Flores",
                authorImage: "images/albert-icon.svg",
                authorAlt: "albert-img",
                date: "12 November 2021"
            },
            {
                title: "Plantain and Pinto Stew with Aji Verde",
                page: "blogPostPage.html",
                image: "images/plantain.png",
                imageAlt: "plantain-img",
                excerpt: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
                author: "Courtney Henry",
                authorImage: "images/courtney-icon.svg",
                authorAlt: "courtney-img",
                date: "12 November 2021"
            },
            {
                title: "Simple & Delicious Vegetarian Lasagna",
                page: "blogPostPage.html",
                image: "images/lasagna.png",
                imageAlt: "lasagna-img",
                excerpt: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
                author: "Leslie Alexander",
                authorImage: "images/leslie-icon.svg",
                authorAlt: "leslie-img",
                date: "12 November 2021"
            },
            {
                title: "Full Guide to Becoming a Professional Chef",
                page: "blogPostPage.html",
                image: "images/professionalChef.png",
                imageAlt: "professionalChef-img",
                excerpt: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
                author: "Dianne Russell",
                authorImage: "images/dianne-icon.svg",
                authorAlt: "dianne-img",
                date: "12 November 2021"
            },
            {
                title: "10 Vegetarian Recipes To Eat This Month",
                page: "blogPostPage.html",
                image: "images/fruiteSalad.png",
                imageAlt: "fruiteSalad-img",
                excerpt: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
                author: "Robert Fox",
                authorImage: "images/robert-icon.svg",
                authorAlt: "robert-img",
                date: "12 November 2021"
            },
            {
                title: "Crochet Projects for Noodle Lovers",
                page: "blogPostPage.html",
                image: "images/romen.png",
                imageAlt: "romen-img",
                excerpt: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
                author: "Wade Warren",
                authorImage: "images/wade-icon.svg",
                authorAlt: "wade-img",
                date: "12 November 2021"
            }
        ],
        3: [
            {
                title: "Crochet Projects for Noodle Lovers",
                page: "blogPostPage.html",
                image: "images/romen.png",
                imageAlt: "romen-img",
                excerpt: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
                author: "Wade Warren",
                authorImage: "images/wade-icon.svg",
                authorAlt: "wade-img",
                date: "12 November 2021"
            },
            {
                title: "We're Hiring a Communications Assistant!",
                page: "blogPostPage.html",
                image: "images/weAreHiring.png",
                imageAlt: "weAreHiring-img",
                excerpt: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
                author: "Albert Flores",
                authorImage: "images/albert-icon.svg",
                authorAlt: "albert-img",
                date: "12 November 2021"
            },
            {
                title: "10 Vegetarian Recipes To Eat This Month",
                page: "blogPostPage.html",
                image: "images/fruiteSalad.png",
                imageAlt: "fruiteSalad-img",
                excerpt: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
                author: "Robert Fox",
                authorImage: "images/robert-icon.svg",
                authorAlt: "robert-img",
                date: "12 November 2021"
            },
            {
                title: "Plantain and Pinto Stew with Aji Verde",
                page: "blogPostPage.html",
                image: "images/plantain.png",
                imageAlt: "plantain-img",
                excerpt: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
                author: "Courtney Henry",
                authorImage: "images/courtney-icon.svg",
                authorAlt: "courtney-img",
                date: "12 November 2021"
            },
            {
                title: "Full Guide to Becoming a Professional Chef",
                page: "blogPostPage.html",
                image: "images/professionalChef.png",
                imageAlt: "professionalChef-img",
                excerpt: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
                author: "Dianne Russell",
                authorImage: "images/dianne-icon.svg",
                authorAlt: "dianne-img",
                date: "12 November 2021"
            },
            {
                title: "Simple & Delicious Vegetarian Lasagna",
                page: "blogPostPage.html",
                image: "images/lasagna.png",
                imageAlt: "lasagna-img",
                excerpt: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
                author: "Leslie Alexander",
                authorImage: "images/leslie-icon.svg",
                authorAlt: "leslie-img",
                date: "12 November 2021"
            },            
        ]
    };

    function renderPosts() {
        const posts = blogPages[currentPage] || [];

        const filteredPosts = posts.filter(post =>
            post.title.toLowerCase().includes(currentSearch.toLowerCase())
        );

        if (filteredPosts.length === 0) {
            postsContainer.innerHTML = `
                <p class="no-results">No matching articles found.</p>
            `;
            return;
        }

        postsContainer.innerHTML = filteredPosts.map(post => `
            <article class="post-card" data-page="${post.page}">
                <div class="post-card-flex"">
                    <div class="post-image">
                        <img src="${post.image}" alt="${post.imageAlt}">
                    </div>
                    <div class="post-content">
                        <h2 class="post-title">${post.title}</h2>
                        <p class="post-excerpt">
                            ${post.excerpt}
                        </p>
                        <div class="post-meta">
                            <div class="author">
                                <img src="${post.authorImage}" alt="${post.authorAlt}">
                                <span>${post.author}</span>
                            </div>
                            <span class="date">${post.date}</span>
                        </div>
                    </div>
                </div>
            </article>
        `).join("");
    }

    function updatePagination() {
        pageButtons.forEach(btn => {
            btn.classList.toggle("active", Number(btn.dataset.page) === currentPage);
        });
    }

    searchInput.addEventListener("input", function () {
        currentSearch = this.value.trim();
        renderPosts();
    });

    searchBtn.addEventListener("click", function () {
        currentSearch = searchInput.value.trim();
        renderPosts();
    });

    pageButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            currentPage = Number(this.dataset.page);
            updatePagination();
            renderPosts();
        });
    });

    renderPosts();
});

// slider
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
    const button = e.target.closest(".custom-button");
    if (button && button.dataset.page) {
        window.location.href = button.dataset.page;
        return;
    }

    const card = e.target.closest(".tryThis-item, .recipe-card, .post-card, .tasty-item");
    if (card && card.dataset.page) {
        window.location.href = card.dataset.page;
    }
});

document.addEventListener("keydown", function (e) {
    const card = e.target.closest(".tryThis-item, .recipe-card, .post-card, .tasty-item");
    if (!card || !card.dataset.page) return;

    if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        window.location.href = card.dataset.page;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    initTryThisCarousel();
});