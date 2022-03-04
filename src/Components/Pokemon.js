import React from "react";
import { Link } from "react-router-dom";
import Bulbasaur from "../images/Bulbasaur.png"

const Pokemon = ({image, name, type, special_attack, id, weight, height, description, category, sex}) => {

const imagepath = `../images/${name}.png`

    return (
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 cardProfile border-success d-flex flex-column text-center p-0 m-3 h-100">
                <img src={imagepath} className="card-img-top m-0 p-0" alt={name}  />
                <div className="card-body w-100 p-0">
                    <h5 className="card-title Titulos m-0 p-1">{name}</h5>
                    <p className={"card-text Caracteristicas p-2 m-0" + (type === "Vegetal" ? " FondoVegetal": " ") + (type === "Fuego" ? " FondoFuego": " ")  + (type === "Agua" ? " FondoAgua": " ") + (type === "Insecto" ? " FondoInsecto": " ")}>{type}</p>
                    <p className="card-text Caracteristicas p-2 m-0">{special_attack}</p>
                    <div className="FondoDescripcion p-0">
                    <Link to = {`/info/${name}`} className ="None">Mas Informacion</Link>
                    </div>
                </div>
        </div>
    )
}

export default Pokemon