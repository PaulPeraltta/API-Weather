import React from 'react';
import IndCard from '../components/IndCard.jsx';
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
            <div className={s.fond}>
            <div className={s.searchbar}>
            </div>
            </div>
            <div className={s.cardInd}>
                {data.length > 0 ? (
                    
                        <IndCard
                            max={data[data.length - 1].max}
                            min={data[data.length - 1].min}
                            name={data[data.length - 1].name}
                            img={data[data.length - 1].img}
                            temp={data[data.length -1].temp}
                        />
                    
                ) : 
                    <h5 className={s.not}>No hay ciudades seleccionadas</h5>
                    }
            </div>
            
            {/* <hr /> */}
            <div className={s.cards}>
                <Cards
                    cities={data} onClose={handleOnClose}
                />
            </div>
            </div>
    )
}