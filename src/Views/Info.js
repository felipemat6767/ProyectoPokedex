import React from "react";
import { Link, useLocation } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Info = (props) => {
    const query = useQuery();
    const description = query.get("description")

    return (
        <div className="card mb-3" style={{ width: "440px", height:"300px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src= {query.get("image")} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{query.get("name")}</h5>
                        {}
                        <p className="card-text">{description}</p>
                        <p className="card-text">{query.get("type")}</p>
                        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Info