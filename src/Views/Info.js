import React, { useContext} from "react";
import {useParams } from "react-router-dom";
import { GetPokbyId } from "../get/getPok";
import { Context } from '../store/appContext';


const Info = (props) => {
    const { store } = useContext(Context)
    const { Pokname } = useParams()

    const Pok = GetPokbyId(Pokname)

    const { special_attack, weight, height, description, sex } = Pok
    const imagepath = `../images/${Pokname}.png`
    return (
        <div className="d-flex justify-content-center mt-5 flex-column align-items-center">
            <div className="card mb-3  rounded-5" style={{ height: "440px", width: "800px" }}>
                <h5 className="card-title mx-auto titpok mt-2">{Pokname}</h5>
                <div className="row g-0 h-100">
                    <div className="col-md-6 h-100">
                        <img src={imagepath} className="img-fluid rounded-start h-100" alt={Pokname} />
                    </div>
                    <div className="col-md-6 h-100 d-flex justify-content-around flex-column">
                        <div className="fondocarac m-1">
                            <div className="d-flex flex-column align-items-center p-1">
                                <p className="mb-2 colortipo">Tipo </p>
                                <p className="card-text colorcarac text-center">{description}</p>
                            </div>
                            <div className="p-1 d-flex flex-column align-items-center">
                                <p className="mb-2 colortipo">Habilidad </p>
                                <p className="card-text colorcarac">{special_attack}</p>
                            </div>
                            <div className="d-flex flex-column align-items-center p-1">
                                <span className="colortipo">Altura </span>
                                <span className="card-text colorcarac">{height}</span>
                            </div>
                            <div className="d-flex flex-column align-items-center p-1">
                                <span className="colortipo ">Peso </span>
                                <span className="card-text colorcarac">{weight}</span>
                            </div>
                            <div className="d-flex flex-column align-items-center p-1">
                                <span className="colortipo">Sexo </span>
                                <span className="card-text colorcarac">{sex}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )

}

export default Info