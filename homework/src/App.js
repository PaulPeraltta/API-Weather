import React from 'react';
import s from './App.module.css';
import { Route } from 'react-router-dom'
import CitiesPage from './views/CitiesPage';
import CityDetail from './views/CityDetail';
import fetchCity from './services/Fetch';
import fetchGPS from './services/FetchGPS';
import Nav from './components/Nav';
import NavAbout from './components/NavAbout';
import AboutMe from './views/AboutMe';

function App() {
  const [data, setData] = React.useState([]);

  function onSearch(ciudad) {
    if (data.length > 3) {
      alert("No puedes agregar mas ciudades")
    } else {
      fetchCity(ciudad, setData);
    }
  }

  function handleOnClose(id) {
    setData(prevData => {
      return prevData.filter(city => city.id !== id)
    })
  }
  React.useEffect(() => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition((pos) => {
        fetchGPS(pos.coords.latitude, pos.coords.longitude, setData);
      })
  }, []);
  return (
    <div className={s.app}>
      <Route path='/' exact>
        {/* <Nav /> */}
        <CitiesPage
          data={data}
          onSearch={onSearch}
          handleOnClose={handleOnClose} />
      </Route>
      <Route path='/city/:id' render={({ match, history }) => {
        const id = parseInt(match.params.id)
        return <CityDetail id={id} onBack={history.goBack} />
      }} />
      <Route path='/about'>
        <NavAbout />
        <AboutMe />
      </Route>
    </div>
  );
}

export default App;
 