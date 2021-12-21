import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { useState } from "react";

const Pokemon = (props) => {
    const [Color, setColor] = useState("");
    const { store, actions } = useContext(Context)
    const type = props.data.type
   
    //actions.getName(props.data.name)
    return (
        
        <div className="col-sm-12 col-md-6 col-lg-3 mt-3 cardProfile border-success d-flex flex-column text-center p-0 m-3 h-100">
                <img src={props.image} className="card-img-top m-0 p-0" alt="..."  />
                <div className="card-body w-100 p-0">
                    <h5 className="card-title Titulos m-0 p-1">{props.data.name}</h5>
                    <p className={"card-text Caracteristicas p-2 m-0" + (props.data.type === "Vegetal" ? " FondoVegetal": " ") + (props.data.type === "Fuego" ? " FondoFuego": " ")  + (props.data.type === "Agua" ? " FondoAgua": " ") + (props.data.type === "Insecto" ? " FondoInsecto": " ")}>{props.data.type}</p>
                    <p className="card-text Caracteristicas p-2">{props.data.special_attack}</p>
                    <Link to={`/info?description=` + props.data.description +"&name=" + props.data.name +"&type=" + props.data.type +"&attack=" + props.data.special_attack +"&weight=" + props.data.weight + "&height=" + props.data.height + "&category=" + props.data.category +"&image=" + props.image} className="">
                    <h4>Ver Descripción</h4>
                    </Link>
                </div>
        </div>
    )
}

export default Pokemon