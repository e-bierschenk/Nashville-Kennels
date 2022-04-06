import React from "react"
import "./Customer.css"

export const CustomerCard = ({customer}) => (
    <div className="card">
            <div className="card-content">
                <h3>{customer.name}</h3>
                <p>{customer.address}</p>
            </div>
        </div>
)
