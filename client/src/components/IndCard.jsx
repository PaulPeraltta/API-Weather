import React from "react";
import s from "./styles/IndCard.module.css";

export default function Card(props) {
  // acá va tu código
  // let min = props.min - 273.15;
  // let max = props.max - 273.15;
  return (
    <div className={s.cardInd}>
      <div className={s.first}>
        <h3 className={s.title}>{props.name}</h3>
        <h2 className={s.tempact}>{props.temp}ºC</h2>
      </div>
      <div className={s.info}>
        <div>
          <img
            className={s.img}
            src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
            alt="img"
          />
        </div>
        <div className={s.align}>
          <div className={s.temp}>
            <div className={s.minmax}>
              <h5>Min</h5>
              <p>{props.min}ºC</p>
            </div>
            <div className={s.minmax}>
              <h5>Max</h5>
              <p>{props.max}ºC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
