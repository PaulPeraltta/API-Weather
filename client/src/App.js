import React from "react";
import s from "./App.module.css";
import { Route } from "react-router-dom";
import CitiesPage from "./views/CitiesPage";
import CityDetail from "./views/CityDetail";
import fetchCity from "./services/Fetch";
import fetchGPS from "./services/FetchGPS";
import AboutMe from "./views/AboutMe";

function App() {
  const [data, setData] = React.useState([]);

  function onSearch(ciudad) {
    if (data.length > 5) {
      alert("No puedes agregar mas ciudades");
    } else {
      fetchCity(ciudad, setData);
    }
  }

  function handleOnClose(id) {
    setData((prevData) => {
      return prevData.filter((city) => city.id !== id);
    });
  }
  React.useEffect(() => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition((pos) => {
        fetchGPS(pos.coords.latitude, pos.coords.longitude, setData);
      });
  }, []);
  return (
    <div className={s.app}>
      <Route path="/" exact>
        <CitiesPage
          data={data}
          onSearch={onSearch}
          handleOnClose={handleOnClose}
        />
      </Route>
      <Route
        path="/city/:id"
        render={({ match, history }) => {
          const id = parseInt(match.params.id);
          return <CityDetail id={id} onBack={history.goBack} />;
        }}
      />
      <Route path="/about"
      render={({ match, history }) => {
        return <AboutMe onBack={history.goBack}/>
      }}
      />
    </div>
  );
}

export default App;
