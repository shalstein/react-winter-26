import Recipe from "./Recipe";
export default function Recipes({ recipes, searchWord }) {
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchWord.toLowerCase()),
  );
  const recipeListJsx = filteredRecipes.map((recipe) => {
    return <Recipe recipe={recipe} />;
  });

  return recipeListJsx;
}
