import React from "react";
import s from "./styles/AboutMe.module.css";

export default function AboutMe() {
  return (
    <div>
      <div className={s.textCont}>
        <div className={s.textd}>
          <h2 className={s.bold}>About</h2>
          <h2 className={s.fine}>Me</h2>
        </div>
        <p className={s.desc}>Hello, I'm Pablo Peralta!</p>
        <p className={s.desc}>
          I'm 23 years old, and I'm currently studying programming in
          soyhenry.com.
        </p>
        <p className={s.desc}>
          This is my first App created with React, it was made with the help
          of&nbsp;
          <a className={s.apilink} href="http://openweathermap.org">
            openweathermap.org
          </a>
          &nbsp;API.
        </p>
        <p className={s.desc}>
          If you want to contact me or chat with me, you can do it by the
          following means.
        </p>
      </div>
      <div className={s.boxima}>
        <div className={s.net}>
            <img className={s.image} src="https://img.icons8.com/ios-filled/50/000000/github.png" />
            <p>GitHub</p>
        </div>
        <div className={s.net}>
            <img className={s.image} src="https://img.icons8.com/color/50/000000/linkedin.png" />
            <p>LinkedIn</p>
        </div>
        <div className={s.net}>
            <img className={s.image} src="https://img.icons8.com/fluency/48/000000/gmail-new.png" />
            <p>Gmail</p>
        </div>
      </div>
      </div>
  );
}