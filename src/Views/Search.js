import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext';
import Pokemon from '../Components/Pokemon';

export const Search = () => {
    const { store } = useContext(Context)
    const [input, setInput] = useState('');
    const cartas = store.event.map((pokemon, i) => <Pokemon key={pokemon.name}  {...pokemon} />)

    console.log(cartas)
   
    const filter = cartas.filter( num => {
        if(num.key === input) return num
    })

    return (
        <div className='container row d-flex mt-4 align-content-center justify-content-center mx-auto'>
            <input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder="Ingresar Nombre de Pokemon" className='input' />
            {filter}
        </div>

    )
}
