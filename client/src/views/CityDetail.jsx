import React from "react";
import { Link } from "react-router-dom";
import fetchById from "../services/FetchById";
import s from "./styles/CityDetail.module.css";

export default function CityDetail({ id, onBack }, props) {
  const [city, setCity] = React.useState();
  React.useEffect(() => {
    fetchById(id, setCity);
  }, [id, setCity]);
  console.log(city);
  return (
    <div >
      <div className={s.head}>
        <nav className={s.navposs}>
          <div className={s.texti}>
            <button onClick={onBack} className={s.btnback}>
              <img src="https://img.icons8.com/windows/32/000000/long-arrow-left.png" />
            </button>
            <h2 className={s.bold}>City</h2>
            <h2 className={s.fine}>Info</h2>
          </div>
        </nav>
      </div>
      {city === undefined && <h3 className={s.loading}>Loading...</h3>}
      {city === null && <h3>No se han encontrado datos</h3>}
      {city && (
        <div style={{display:"flex", justifyContent:"center", padding:"30px 0"}}>
          <div className={s.cardInd}>
            <div className={s.first}>
              <h3 className={s.title}>{city.name}</h3>
            </div>
            <div className={s.contInfo}>
              <div className={s.contMinMax}>
              <div className={s.minmax}>
                <div>
                  <label>Min:</label>
                  <h3>{city.min} ºC</h3>
                </div>
                <div>
                  <label>Max:</label>
                  <h3>{city.max} ºC</h3>
                </div>
              </div>
              <div className={s.minmax}>
                <div>
                  <label>Weather:</label>
                  <h3>{city.weather}</h3>
                </div>
                <div>
                  <label>Wind:</label>
                  <h3>{city.wind}</h3>
                </div>
              </div>
              </div>
              <div className={s.tempimg}>
                <img
                  src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}
                  alt="Weather Image"
                />
                <div>
                  <h1 style={{whiteSpace:"nowrap"}}>{city.temp} ºC</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

{
  /* <div className={s.info}>
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
          </div> */
}

// ------------------------------

// <div className={s.cardDet}>
//   <div className={s.head}>
//     <h1 className={s.name}>{city.name}</h1>
//     <div>
//       <div className={s.minmax}>
//         <div>
//           <label>Min:</label>
//           <h3>{city.min} ºC</h3>
//         </div>
//         <div>
//           <label>Max:</label>
//           <h3>{city.max} ºC</h3>
//         </div>
//       </div>
//       <div className={s.minmax}>
//       <div >
//         <label>Weather:</label>
//         <h3>{city.weather}</h3>
//       </div>
//       <div>
//         <label>Wind:</label>
//         <h3>{city.wind}</h3>
//       </div>
//       </div>
//     </div>
//   </div>
//   <div className={s.tempimg}>
//     <img
//       src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}
//       alt="Image not found"
//     />

//     <div>
//       <h1>{city.temp} ºC</h1>
//     </div>
//   </div>
// </div>
