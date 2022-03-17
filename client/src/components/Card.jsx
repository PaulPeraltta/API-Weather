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
          <button className={s.btn} onClick={props.onClose}><img className={s.closeImg} src="https://img.icons8.com/material-rounded/24/ffffff/delete-sign.png" alt="Close"/></button>
        </div>
        <Link to={`/city/${props.id}`} style={{color: 'white', textDecoration:'none'}}>
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
          <div className={s.divImg}>
            <img className={s.img} src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='img' />
          </div>
          <div className={s.info}>
          <p>Informacion Detallada</p>
          </div>
        </div>
    </Link>
      </div>
  )
};