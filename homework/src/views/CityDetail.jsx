import React from "react";
import { Link } from "react-router-dom";
import fetchById from "../services/FetchById";
import s from "./styles/CityDetail.module.css";

export default function CityDetail({ id , onBack }) {
    const [city, setCity] = React.useState();
    React.useEffect(() => {
        fetchById(id, setCity);
    }, [id, setCity]);
    console.log(city)
    return (
        <div>
            <button onClick={onBack} className={s.btnback}><img src="https://img.icons8.com/windows/32/000000/long-arrow-left.png" /></button>
            {city === undefined && <h3>Loading</h3>}
            {city === null && <h3>No se han encontrado datos</h3>}
            {city &&
                <div>
                    <div>
                    <label>Ciudad:</label>
                    <h1>{city.name}</h1>
                    </div>
                    <div>
                    <label>Temperatura maxima:</label>
                    <h1>{city.max}</h1>
                    </div>
                    <div>
                    <label>Temperatura minima:</label>
                    <h1>{city.min}</h1>
                    </div>
                </div>}
        </div>
    )

    // if(city === undefined) return <h3>Cargando datos de la ciudad</h3>
    // if(city === null) return <h3>Ciudad no encontrada</h3>
    // return (
    //     <div>
    //         {city.name}
    //     </div>
    // )
}