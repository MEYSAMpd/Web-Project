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
                authorImage: "../images/dianne-icon.svg",
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
                <div class="post-card-flex">
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
