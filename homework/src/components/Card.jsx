import React from 'react';
import { Link } from 'react-router-dom';
import s from './styles/Card.module.css';

export default function Card(props) {
  // acá va tu código
  // let min = props.min - 273.15;
  // let max = props.max - 273.15;
  return (
    <div className={s.card}>
      <div>
        <button className={s.btn} onClick={props.onClose}>X</button>
      </div>
      <div className={s.poss}>
        <div className={s.align}>
          <h3>{props.name}</h3>
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
        <div style={{width: '100px', height: '100px', alignItems: 'center'}}>
          <img className={s.img} src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='img' />
        </div>
        <div className={s.info}>
        <Link to={`/city/${props.id}`}><p>Informacion Detallada</p></Link>
        </div>
      </div>
    </div>
  )
};