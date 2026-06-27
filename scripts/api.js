const BASE_URL = "https://foodieland-oq9b.onrender.com";

async function getData(endpoint) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`);

        if (!response.ok) {
            throw new Error("Request failed");
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getCategories() {
    return await getData("/api/categories");
}

async function postData(endpoint, data) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error("Request failed");
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getRecipeDetails(id) {
    try {
        const res = await fetch(`${BASE_URL}/api/recipe-details/${id}`);
        if (!res.ok) throw new Error("Failed to load recipe");

        return await res.json();
    } catch (err) {
        console.error(err);
        throw err;
    }
}

// method 1
async function subscribe(email) {
    return await postData("/api/subscribe", {
        email: email
    });
}


// method 2
const sendContact = (data) => postData("/api/contact", data);