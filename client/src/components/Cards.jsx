import React from 'react';
import Card from './Card';
import s from './styles/Cards.module.css'

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
  <div className={s.grid}>
    {props.cities.map(c => <Card 
    id={c.id}
    name={c.name} 
    min={c.min} 
    max={c.max}
    img={c.img}
    onClose={() => props.onClose(c.id)}
    key={c.id}/>
    )}
  </div>
  )
};