import React from "react";

export default function Recipe({ recipe }) {
  return (
    <React.Fragment>
      <h1>{recipe.name}</h1>
      {recipe.ingredients.length <= 3 && "✅"}
      <p>Difficulty: {recipe.ingredients.length >= 3 ? "Hard" : "Easy"} </p>
      <ol>
        {recipe.ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ol>
    </React.Fragment>
  );
}
