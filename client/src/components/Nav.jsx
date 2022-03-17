import React from "react";
import s from "./styles/Nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className={s.navposs}>
        <NavLink style={{textDecoration: "none"}} to="/">
            <div className={s.texti}>
              <h2 className={s.bold}>Weather</h2>
              <h2 className={s.fine}>App</h2>
            </div>
        </NavLink>
    </nav>
  );
}
