async function initializePage() {
    await loadCategories();
}

async function loadCategories() {

    const spinner = document.getElementById("loading-spinner");
    const container = document.getElementById("categoriesContainer");

    try {

        spinner.style.display = "flex";
        container.style.display = "none";


        const categories = await getCategories();


        const html = categories.map(category => `
            <div class="icon-item" id="${category.name.toLowerCase()}">
            <img
                src="${category.image}" 
                alt="${category.name}"
                onerror="this.onerror=null; this.src='images/${category.name}-icon.png';"
            />
                <h3>${category.name}</h3>
            </div>
        `).join("");


        container.innerHTML = html;


    }
    catch (error) {

        console.error(error);

        showError(
            "Unable to load categories. Please try again later.",
            "categoriesContainer"
        );

    }
    finally {

        spinner.style.display = "none";
        container.style.display = "flex";

    }
}