const recipes = [
    {
      id: 1,
      title: "Delicious Pancakes",
      description: "Fluffy pancakes served with maple syrup and fresh berries.",
      image: "istockphoto-172249723-2048x2048.jpg",
      ingredients: [
        "2 cups all-purpose flour",
        "2 tablespoons sugar",
        "1 tablespoon baking powder",
        "1/2 teaspoon salt",
        "2 large eggs",
        "1 3/4 cups milk",
        "1/4 cup unsalted butter, melted",
        "Maple syrup and fresh berries, for serving"
      ],
      instructions: "1. Mix the pancake batter...",
    },
    {
      id: 2,
      title: "Classic Margherita Pizza",
      description: "Traditional pizza topped with tomato sauce, mozzarella cheese, and fresh basil.",
      image: "istockphoto-1393150881-2048x2048.jpg",
      ingredients: [
        "Pizza dough",
        "1/2 cup tomato sauce",
        "1 1/2 cups shredded mozzarella cheese",
        "Fresh basil leaves",
        "Salt and pepper to taste"
      ],
      instructions: "1. Preheat the oven...",
    },
    {
      id: 3,
      title: "Creamy Tomato Soup",
      description: "Smooth and creamy tomato soup with a touch of basil.",
      image: "istockphoto-1144164083-2048x2048.jpg",
      ingredients: [
        "2 tablespoons butter",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "28 oz canned crushed tomatoes",
        "1 cup vegetable broth",
        "1/2 cup heavy cream",
        "Fresh basil leaves",
        "Salt and pepper to taste"
      ],
      instructions: "1. In a large pot...",
    },
    {
      id: 4,
      title: "Refreshing Strawberry Smoothie",
      description: "A cool and refreshing smoothie made with fresh strawberries and yogurt.",
      image: "premium_photo-1664391890762-032c86019c37.avif",
      ingredients: [
        "1 cup fresh strawberries",
        "1 banana",
        "1/2 cup plain yogurt",
        "1/2 cup milk",
        "1 tablespoon honey",
        "Ice cubes"
      ],
      instructions: "1. Blend all ingredients...",
    }
    ,
    {
        id: 5,
        title: "Savory Spinach and Feta Quiche",
        description: "A delicious quiche made with spinach, feta cheese, and a flaky pie crust.",
        image: "spinach-feta-quiche-on-cooling-rack.jpg",
        ingredients: [
        "1 pie crust",
        "2 cups fresh spinach, chopped",
        "1/2 cup crumbled feta cheese",
        "4 large eggs",
        "1 cup milk",
        "Salt and pepper to taste"
        ],
        instructions: "1. Preheat the oven...",
    },
    {
        id: 6,
        title: "Homestyle Chicken Noodle Soup",
        description: "Hearty chicken noodle soup with tender chicken, vegetables, and egg noodles.",
        image: "istockphoto-172999861-2048x2048.jpg",
        ingredients: [
          "2 boneless, skinless chicken breasts",
          "8 cups chicken broth",
          "2 carrots, sliced",
          "2 celery stalks, chopped",
          "1 onion, chopped",
          "2 cloves garlic, minced",
          "2 cups egg noodles",
          "Fresh parsley for garnish",
          "Salt and pepper to taste"
        ],
        instructions: "1. In a large pot...",
      },
    
    ];
    
    
  

  
  const recipeCardsContainer = document.getElementById('recipe-cards');
  const recipeDetailsContainer = document.getElementById('recipe-details');
  
  function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-md', 'cursor-pointer');
    card.innerHTML = `
      <img class="h-40 w-full object-cover mb-2 rounded" src="${recipe.image}" alt="${recipe.title}">
      <h2 class="text-xl font-semibold">${recipe.title}</h2>
    `;
    card.addEventListener('click', () => displayRecipeDetails(recipe));
    return card;
  }
  
  function displayRecipeDetails(recipe) {
    recipeDetailsContainer.innerHTML = `
      <div class="flex items-center justify-center h-full">
        <div class="max-w-xl w-full bg-white rounded-lg shadow-md p-6">
          <img class="h-40 w-full object-cover mb-4 rounded" src="${recipe.image}" alt="${recipe.title}">
          <h2 class="text-2xl font-semibold mb-2">${recipe.title}</h2>
          <p class="text-gray-600 mb-4">${recipe.description}</p>
          <h3 class="text-lg font-semibold mb-2">Ingredients</h3>
          <ul class="list-disc pl-6">
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
          </ul>
          <h3 class="text-lg font-semibold mt-4">Instructions</h3>
          <p>${recipe.instructions}</p>
        </div>
      </div>
    `;
    recipeDetailsContainer.classList.remove('hidden');
  }
  
  
  
  recipes.forEach(recipe => {
    const card = createRecipeCard(recipe);
    recipeCardsContainer.appendChild(card);
  });
  
