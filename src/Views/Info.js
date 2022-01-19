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
            <div className="card mb-3 w-50 rounded-5" style={{ height: "400px" }}>
                <h5 className="card-title mx-auto titpok mt-2">{query.get("name")}</h5>
                <div className="row g-0 h-100">
                    <div className="col-md-6 h-100">
                        <img src={query.get("image")} className="img-fluid rounded-start h-100" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <p className="card-text m-1">{description}</p>
                        <div className="card-body d-flex justify-content-between mt-3 fondocarac p-3 rounded-3 m-2">
                            <div className="col-6">
                                <div className="">
                                    <p className="mb-2 colortipo">Tipo </p>
                                    <p className="card-text colorcarac">{query.get("type")}</p>
                                </div>
                                <div className="mt-4 p-0">
                                    <p className="mb-2 colortipo">Habilidad </p>
                                    <p className="card-text colorcarac">{query.get("attack")}</p>
                                </div>
                            </div>
                            <div className="col-6 d-flex justify-content-end flex-column align-items-center">
                                <div className="">
                                    <p className="mb-2 colortipo">Altura </p>
                                    <p className="card-text colorcarac">{query.get("height")}</p>
                                </div>
                                <div className="mt-4">
                                    <p className="mb-2 colortipo">Peso </p>
                                    <p className="card-text colorcarac">{query.get("weight")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Info