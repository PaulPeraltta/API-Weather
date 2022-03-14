import React from "react";
import s from "./styles/SearchBar.module.css";

export default function SearchBar({onSearch}) {

  const handleOnSearch = () => {
    const input = document.getElementById("searchInput");
    onSearch(input.value);
    input.value = "";
  };

  return (
    <div className={s.bord}>
      <div className={s.cont}>
        <input
          id="searchInput"
          className={s.inp}
          placeholder="Ciudad"
          autoComplete="off"
          onKeyPress={(e) => {
            if (e.key === "Enter") handleOnSearch();
          }}
        ></input>
        <button className={s.btn} onClick={handleOnSearch}>
          Agregar
        </button>
      </div>
    </div>
  );
}
