
import Pokemon from '../Components/Pokemon';
import React, { useEffect, useContext, useState } from "react";
import { Context } from '../store/appContext';


const Home = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.setInfo()
        actions.getName()
    }, [])
  
    const getInitialState = () => {
        let value = "0";
        return value;
        
    };
    const [value, setValue] = useState(getInitialState);
    
    const handleChange = (e) => {
        setValue(e.target.value); 
    };
   
    
  
    const NombresA_Z = [...store.event]

    const carta = store.event.map((pokemon, i) => <Pokemon key ={pokemon.name}  {...pokemon} />)
    const cartaRev = store.event.map((pokemon, i) => <Pokemon key ={pokemon.name}  {...pokemon} />)
    const Reverse = cartaRev.reverse(function (num) { return num })
    
    const cartaA_Z = NombresA_Z.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0).map((pokemon, i) => <Pokemon key ={pokemon.name} {...pokemon} />)
    
    const cartaA_ZRev = NombresA_Z.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0).map((pokemon, i) => <Pokemon key ={pokemon.name} {...pokemon}/>)
    const A_ZRev = cartaA_ZRev.reverse(function (num) { return num })
    /*const carta = store.event.map((pokemon, i) => <Pokemon data={pokemon} key={i} indice={i} image={fotos[i]} pokname={store.names[i]} />)

    const cartarev = store.event.map((pokemon, i) => <Pokemon data={pokemon} key={i} indice={i} image={fotos[i]} pokname={store.names[i]} />)
    const Reverse = cartarev.reverse(function (num) { return num })
    
    const cartaA_ZRev = NombresA_Z.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0).map((pokemon, i) => <Pokemon data={pokemon} key={i} indice={i} image={fotos[i]} />)
    const A_ZRev = cartaA_ZRev.reverse(function (num) { return num })
    
    
    
    {value === "2" ? Reverse : ""}
    {value === "3" ? cartaA_Z : ""}
    {value === "4" ? cartaA_ZRev : ""}
    {value === "0" ? Name : ""}//
    
    */
//const Name = carta.filter(function (num) {if(num.props.data.name === input) {return num}}) 
    return (
        <div className="container row d-flex m-3 align-content-center justify-content-center">
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" value={value} onChange={handleChange}>
                <option>-- Alternativas de Busqueda --</option>
                <option value="1">Orden Ascendiente</option>
                <option value="2">Orden Decreciente</option>
                <option value="3">A-Z</option>
                <option value="4">Z-A</option>
            </select>
            {}
            {value === "1" ? carta : ""}
            {value === "2" ? Reverse : ""}
            {value === "3" ? cartaA_Z : ""}
            {value === "4" ? cartaA_ZRev : ""}
        </div>
    )

}

export default Home