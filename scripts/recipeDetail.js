async function loadRecipeDetails() {
    try {
        const data = await getRecipeDetails(1);

        // STOP SPINNER
        const spinner = document.getElementById("loading-spinner");
        if (spinner) spinner.style.display = "none";

        // TITLE + META
        const title = document.getElementById("recipe-title");
        const authorName = document.getElementById("author-name");
        const authorDate = document.getElementById("author-date");
        const prepTime = document.getElementById("prep-time");
        const cookTime = document.getElementById("cook-time");
        const category = document.getElementById("recipe-category");

        if (title) title.innerText = data.title;
        if (authorName) authorName.innerText = data.author.name;
        if (authorDate) authorDate.innerText = data.author.date;
        if (prepTime) prepTime.innerText = data.prepTime;
        if (cookTime) cookTime.innerText = data.cookTime;
        if (category) category.innerText = data.category;

        // IMAGE (FIXED)
        const imageBox = document.getElementById("recipe-image-box");

        if (imageBox) {
            const img = document.createElement("img");
            img.src = data.mainImage;
            img.alt = data.title;
            img.className = "recipe-image";

            img.onerror = () => {
                img.src = "https://via.placeholder.com/600x400?text=No+Image";
            };

            imageBox.innerHTML = "";
            imageBox.appendChild(img);
        }

        // NUTRITION (FIXED)
        const nutritionList = document.getElementById("nutrition-list");

        if (nutritionList) {
            nutritionList.innerHTML = `
                <li><span class="list-title">Calories</span><span class="list-value">${data.nutrition.calories}</span></li>
                <li><span class="list-title">Total Fat</span><span class="list-value">${data.nutrition.totalFat}</span></li>
                <li><span class="list-title">Protein</span><span class="list-value">${data.nutrition.protein}</span></li>
                <li><span class="list-title">Carbohydrate</span><span class="list-value">${data.nutrition.carbohydrate}</span></li>
                <li><span class="list-title">Cholesterol</span><span class="list-value">${data.nutrition.cholesterol}</span></li>
            `;
        }

        // DESCRIPTION
        const desc = document.getElementById("recipeDetailText");
        if (desc) desc.innerText = data.description;

    } catch (err) {
        console.error(err);

        const spinner = document.getElementById("loading-spinner");
        if (spinner) {
            spinner.innerHTML = "<p>Failed to load recipe 😕</p>";
        }
    }
}

window.initializePage = async function () {
    await loadRecipeDetails();
};