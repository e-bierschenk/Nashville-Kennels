import React from "react";
import "./Location.css"

export const LocationCard = ({location}) => (
    <div className="card">
        <div className="card-content">
            <h3>{location.name}</h3>
            <p>{location.address}</p>
        </div>
    </div>
)
