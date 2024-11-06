function submitForm() {
    // Get form
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const recipeName = document.getElementById("recipeName").value;
    const recipeType = document.getElementById("recipeType").value;

    // Get ingredients
    const ingredients = [];
    document.querySelectorAll('input[name="ingredients"]:checked').forEach((checkbox) => {
        ingredients.push(checkbox.value);
    });


    // Check if required fields are filled
    if (!email || !date || !recipeName || ingredients.length === 0 || !recipeType) {
        alert("Please fill in all fields before submitting the form.");
        return;
    }


    console.log("Email:", email);
    console.log("Date:", date);
    console.log("Recipe Name:", recipeName);
    console.log("Ingredients:", ingredients);
    console.log("Recipe Type:", recipeType);

    alert("Recipe submitted successfully!");
}
