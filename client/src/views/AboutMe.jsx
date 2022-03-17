import React from "react";
import s from "./styles/AboutMe.module.css";
import ME from "../assets/Iam.png";

export default function AboutMe({onBack}) {
  return (
    <div>
      <div className={s.head}>
        <nav className={s.navposs}>
            <div className={s.texti}>
              <button onClick={onBack} className={s.btnback}>
                <img src="https://img.icons8.com/windows/32/000000/long-arrow-left.png" />
              </button>
              <h2 className={s.bold}>About</h2>
              <h2 className={s.fine}>Me</h2>
            </div>
        </nav>
      </div>

      <div className={s.info}>
      <div className={s.textCont}>
        <p className={s.desc}>Hello, I'm Pablo Peralta!</p>
        <p className={s.desc}>
          I'm 23 years old, and I'm currently studying programming in
          soyhenry.com.
        </p>
        <p className={s.desc}>
          This is my first App created with React, it was made with the help
          of <a className={s.apilink} href="http://openweathermap.org">
            openweathermap.org</a> API.
        </p>
        <p className={s.desc}>
          If you want to contact me or chat with me, you can do it by the
          following means.
        </p>
      </div>
      <div className={s.imgContainer}>
      <img className={s.imagenPerfil} src={ME} alt="Pablo Peralta"/>

      </div>
      </div>



      <div className={s.boxima}>
        <div className={s.net}>
            <a style={{color: "black", textDecoration: "none"}} href="https://github.com/PaulPeraltta" target="_blank"><img className={s.image} src="https://img.icons8.com/ios-filled/50/000000/github.png" />
            <p>GitHub</p></a>
        </div>
        <div className={s.net}>
            <a style={{color: "black", textDecoration: "none"}} href="https://www.linkedin.com/in/pablo-peralta-it/" target="_blank"><img className={s.image} src="https://img.icons8.com/color/50/000000/linkedin.png" />
            <p>LinkedIn</p></a>
        </div>
        <div className={s.net}>
            <a style={{color: "black", textDecoration: "none"}} href="mailto:pabloperalta.it@gmail.com" target="_blank"><img className={s.image} src="https://img.icons8.com/fluency/48/000000/gmail-new.png" />
            <p>Gmail</p></a>
        </div>
      </div>
      </div>
  );
}
