
import Pokemon from '../Components/Pokemon';
import React, { useEffect, useContext } from "react";
import { Context } from '../store/appContext';
import Foto1 from "../images/Foto1.jpg"
import Foto2 from "../images/002.png"
import Foto3 from "../images/003.png"
import Foto4 from "../images/004.png"
import Foto5 from "../images/005.png"
import Foto6 from "../images/006.png"
import Foto7 from "../images/007.png"
import Foto8 from "../images/008.png"
import Foto9 from "../images/009.png"
import Foto10 from "../images/010.png"
import Foto11 from "../images/011.png"
import Foto12 from "../images/012.png"
import { useState } from "react";
const fotos = [Foto1, Foto2, Foto3, Foto4, Foto5, Foto6, Foto7, Foto8, Foto9,Foto10,Foto11, Foto12]

const nombres = ["Bulbasaur", "Ivysaur","Venasaur", "Squirtle","Warturtle","Blastoise", "Caterpie", "Metapod", "Butterfree"]


const Home = () => {
    const name = nombres.sort(function (a, b) {
        return a.localeCompare(b);
      });

    const { store, actions } = useContext(Context)
    const carta = store.event.map((event, i) => <Pokemon data={event} key={i} indice={i} 
    image={fotos[i]} names = {name[i]} />)

   console.log(carta.map((event)=> (event)))
 
    useEffect(() => {
        actions.setInfo()
    }, [])
   
    return (
        <div className="container row d-flex m-3 align-content-center justify-content-center">
            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option >Busqueda </option>
                <option value="1">Numero inferior</option>
                <option value="2">Numero Superior</option>
                <option value="3">A-Z</option>
                <option value="3">Z-A</option>
            </select>
            {carta}
        </div>
    )

}

export default Home