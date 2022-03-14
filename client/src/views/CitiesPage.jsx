import React from 'react';
import Cards from '../components/Cards.jsx';
import SearchBar from '../components/SearchBar.jsx';
import s from './styles/CitiesPage.module.css'
import Nav from '../components/Nav.jsx';

export default function CitiesPage({data, onSearch, handleOnClose}) {
    return (
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100vw', height: '100vh'}}>
            <div>
                <Nav onSearch={onSearch} />
            </div>
            <SearchBar onSearch={onSearch} />
            <div className={s.cards}>
                {data.length > 0 ? 
                <Cards
                    cities={data} onClose={handleOnClose}
                />
                : <h5 className={s.not}>No hay ciudades seleccionadas</h5>}
            </div>
        </div>
    )
}