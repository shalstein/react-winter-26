import { useState } from "react";

export default function SearchBar({ searchWord, setSearchWord }) {
  const [searchWordLocal, setSearchWordLocal] = useState("");
  return (
    <>
      <input
        onInput={(e) => setSearchWord(e.target.value)}
        placeholder="Search..."
        value={searchWord}
      />

      {/* <input
        onInput={(e) => setSearchWordLocal(e.target.value)}
        placeholder="Search..."
        value={searchWordLocal}
      /> */}
    </>
  );
}
