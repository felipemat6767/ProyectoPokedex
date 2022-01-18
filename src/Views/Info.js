import React from "react";
import { Link, useLocation } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Info = (props) => {
    const query = useQuery();
    const description = query.get("description")

    return (
        <div className="d-flex justify-content-center mt-5 flex-column align-items-center">
            <div className="card mb-3 w-50" style={{height:"400px"}}>
            <h5 className="card-title mx-auto">{query.get("name")}</h5>
            <div className="row g-0 h-100">
                <div className="col-md-6 h-100">
                    <img src= {query.get("image")} className="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div className="col-md-6">
                    <p className="card-text">{description}</p>
                    <div className="card-body d-flex justify-content-between mt-5">
                        <div>
                            <p className="card-text">Tipo: {query.get("type")}</p>
                            <p className="card-text">Sex: {query.get("sex")}</p>
                        </div>
                        <div>
                            <p className="card-text">Altura: {query.get("height")}</p>
                            <p className="card-text">Peso: {query.get("weight")}</p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )

}

export default Info