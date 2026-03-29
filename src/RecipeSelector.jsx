import { useState } from "react";
import Recipe from "./Recipe";

export default function RecipeSelector({ recipes }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  let notGoodCurrentIndex = 0;
  let currentRecipe = recipes[currentIndex];

  function handleNextClick() {
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <>
      <h1>Current Recipe</h1>
      <button
        disabled={currentIndex == 0 ? true : false}
        onClick={function () {
          setCurrentIndex(currentIndex - 1);
        }}
      >
        Previous
      </button>
      <button
        onClick={handleNextClick}
        disabled={currentIndex == recipes.length - 1 ? true : false}
      >
        Next
      </button>
      <Recipe recipe={currentRecipe} />
    </>
  );
}
