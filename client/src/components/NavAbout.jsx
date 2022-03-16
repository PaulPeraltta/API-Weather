import React from "react";
import s from "./styles/NavAbout.module.css";
import { NavLink } from "react-router-dom";

export default function NavAbout() {
  return (
    <nav className={s.tutonav}>
      <div className={s.navposs}>
        <NavLink to="/">
          <div className={s.place}>
            <div className={s.texti}>
              <h4>Home</h4>
            </div>
          </div>
        </NavLink>
      </div>
    </nav>
  );
}