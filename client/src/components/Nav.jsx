import React from "react";
import s from "./styles/Nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav({onSearch}) {
  return (
    <nav className={s.tutonav}>
      <div className={s.navposs}>
        <NavLink style={{textDecoration: "none"}} to="/">
          {/* <div className={s.place}>
            {/* <img
              className={s.img}
              src="https://img.icons8.com/color/48/000000/fog-day--v2.png"
              alt="WeatherApp"
            /> */}
            <div className={s.texti}>
              <h2 className={s.bold}>Weather</h2>
              <h2 className={s.fine}>App</h2>
            </div>
          {/* </div> */}
        </NavLink>
        {/* <NavLink style={{textDecoration: "none"}} to="/about">
          <div className={s.textd}>
            <h3 className={s.bold}>About</h3>
            <h3 className={s.fine}>Me</h3>
          </div>
        </NavLink> */}
      </div>
    </nav>
  );
}
