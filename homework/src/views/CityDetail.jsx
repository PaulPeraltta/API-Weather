import React from "react";
import { Link } from "react-router-dom";
import fetchById from "../services/FetchById";
import NavOutSearch from "../components/NavOutSearch";
import s from "./styles/CityDetail.module.css";

export default function CityDetail({ id, onBack }) {
  const [city, setCity] = React.useState();
  React.useEffect(() => {
    fetchById(id, setCity);
  }, [id, setCity]);
  console.log(city);
  return (
    <div className={s.all}>
      <button onClick={onBack} className={s.btnback}>
        <img src="https://img.icons8.com/windows/32/000000/long-arrow-left.png" />
      </button>
      {city === undefined && <h3 className={s.loading}>Loading</h3>}
      {city === null && <h3>No se han encontrado datos</h3>}
      {city && (
        <div className={s.cardDet}>
          <NavOutSearch />
          <div className={s.head}>
            <h1 className={s.name}>{city.name}</h1>
            <div>
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
              <div >
                <label>Weather:</label>
                <h3>{city.weather}</h3>
              </div>
              <div>
                <label>Wind:</label>
                <h3>{city.wind}</h3>
              </div>
              </div>
            </div>
          </div>
          <div className={s.tempimg}>
            <img
              src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}
              alt="Image not found"
            />

            <div>
              <h1>{city.temp} ºC</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // if(city === undefined) return <h3>Cargando datos de la ciudad</h3>
  // if(city === null) return <h3>Ciudad no encontrada</h3>
  // return (
  //     <div>
  //         {city.name}
  //     </div>
  // )
}
