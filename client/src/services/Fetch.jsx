const apiKey = '8c7e317a2760f5371def5576fc8c23bc';

export default function fetchCity(ciudad, setData) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
        .then((r) => r.json())
        .then((recurso) => {
            if (recurso.main !== undefined) {
                const ciudad = {
                    min: Math.round(recurso.main.temp_min),
                    max: Math.round(recurso.main.temp_max),
                    img: recurso.weather[0].icon,
                    id: recurso.id,
                    wind: recurso.wind.speed,
                    temp: recurso.main.temp,
                    name: recurso.name,
                    weather: recurso.weather[0].main,
                    clouds: recurso.clouds.all,
                    latitud: recurso.coord.lat,
                    longitud: recurso.coord.lon
                };
                setData(oldCities => [...oldCities, ciudad]);
            } else {
                alert("Ciudad no encontrada");
            }
        });
}