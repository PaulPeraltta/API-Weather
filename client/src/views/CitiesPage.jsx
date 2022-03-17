import React from "react";
import Cards from "../components/Cards.jsx";
import SearchBar from "../components/SearchBar.jsx";
import s from "./styles/CitiesPage.module.css";
import Nav from "../components/Nav.jsx";
import { NavLink } from "react-router-dom";

export default function CitiesPage({ data, onSearch, handleOnClose }) {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className={s.head}>
      <Nav />
      <div style={{display:"flex", flexDirection:"column"}}>
      <h4 className={s.subtitle}>Buscá el clima de tu ciudad favorita!</h4>
      <SearchBar onSearch={onSearch} />
      </div>
      </div>
      <div className={s.cards}>
        {data.length > 0 ? (
          <Cards cities={data} onClose={handleOnClose} />
        ) : (
          <h5 className={s.not}>No hay ciudades seleccionadas</h5>
        )}
      </div>
      <footer className={s.footer}>
        <div>
          <a
            style={{ color: "black", textDecoration: "none" }}
            href="https://github.com/PaulPeraltta"
            target="_blank"
          >
            <img
              className={s.image}
              src="https://img.icons8.com/ios-filled/50/000000/github.png"
            />
          </a>
          <a
            style={{ color: "black", textDecoration: "none" }}
            href="https://www.linkedin.com/in/pablo-peralta-it/"
            target="_blank"
          >
            <img
              className={s.image}
              src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
            />
          </a>
          <a
            style={{ color: "black", textDecoration: "none" }}
            href="mailto:pabloperalta.it@gmail.com"
            target="_blank"
          >
            <img
              className={s.image}
              src="https://img.icons8.com/ios-filled/50/000000/gmail-new.png"
            />
          </a>
        </div>
        <NavLink style={{ textDecoration: "none" }} to="/about">
          <div className={s.textd}>
            <h3 className={s.bold}>About</h3>
            <h3 className={s.fine}>Me</h3>
          </div>
        </NavLink>
      </footer>
    </div>
  );
}
