
document.addEventListener("DOMContentLoaded", () => {
    const ingredientInput = document.getElementById("ingredientInput");
    const generateBtn = document.getElementById("generateBtn");
    const recipeResult = document.getElementById("recipeResult");

    if (!generateBtn) {
        console.error("Button with ID 'generateBtn' not found!");
        return;
    }

    const API_NINJAS_KEY = "hHPO60lyyGj8JN7zxt2Uug==5YVPY7ngx0XDqQ4m"; // Replace with your actual API key

    async function generateRecipe() {
        const ingredients = ingredientInput.value.trim();
        if (!ingredients) {
            recipeResult.innerText = "Please enter ingredients.";
            return;
        }

        const apiUrl = `https://api.api-ninjas.com/v1/recipe?query=${encodeURIComponent(ingredients)}`;

        try {
            const response = await fetch(apiUrl, {
                headers: { "X-Api-Key": API_NINJAS_KEY },
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.statusText}`);
            }

            const data = await response.json();
            if (data.length === 0) {
                throw new Error("No recipes found.");
            }

            const recipe = data[0]; // Get the first recipe suggestion
            displayRecipe(recipe);
        } catch (error) {
            console.error("Error generating recipe:", error);
            recipeResult.innerText = "Failed to generate recipe. Please try again.";
        }
    }

    function displayRecipe(recipe) {
        recipeResult.innerHTML = `
            <h2>${recipe.title}</h2>
            <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        `;
    }

    generateBtn.addEventListener("click", generateRecipe);
});
