import React, { useState, useEffect } from "react";
import { getAllLocations } from "../../modules/LocationManager";
import { LocationCard } from "./Location";

export const LocationList = () => {
    const [locations, setLocations] = useState([])

    const getLocations = () => getAllLocations().then(APIData => setLocations(APIData))

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <div className="container-cards">
            {locations.map(location => <LocationCard location={location} key={location.id} />)}
        </div>
    )
}