import { recipeList } from "./recipesData";
import RecipeSelector from "./RecipeSelector";
import Recipes from "./Recipes";
import SearchBar from "./SearchBar";
import CounterButton from "./lesson0315/CounterButton";
import { useState } from "react";
import ButtonCounterWrong from "./ButtonCounterWrong";

function App() {
  const [searchWord, setSearchWord] = useState("");
  return (
    <>
      <ButtonCounterWrong />
      <h1>Welcome To Recipes App</h1>
      <br />
      <SearchBar searchWord={searchWord} setSearchWord={setSearchWord} />
      <br />
      <Recipes recipes={recipeList} searchWord={searchWord} />
    </>
  );
}

export default App;
