import React from "react";
// import SearchBar from "./SearchBar";
import s from "./styles/NavAbout.module.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className={s.tutonav}>
      <div className={s.navposs}>
        <NavLink to="/">
          <div className={s.place}>
            {/* <img
              className={s.img}
              src="https://img.icons8.com/color/48/000000/fog-day--v2.png"
              alt="WeatherApp"
            /> */}
            <div className={s.texti}>
              <h4>Home</h4>
            </div>
          </div>
        </NavLink>
        {/* <div className={s.bar}>
            <SearchBar />
            </div> */}
        {/* <NavLink to="/about">
            <div className={s.place}>
          <div className={s.textd}>
            <h3 className={s.bold}>About</h3>
            <h3 className={s.fine}>Me</h3>
          </div>
            <img className={s.img2} src="https://img.icons8.com/color/48/000000/user-male-skin-type-7.png"/>
            </div>
        </NavLink> */}
      </div>
    </nav>
  );
}