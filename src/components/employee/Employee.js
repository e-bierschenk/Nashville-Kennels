import React from "react";
import "./Employee.css"

export const EmployeeCard = ({employee}) => (
    <div className="card">
        <div className="card-content">
            <h3>{employee.name}</h3>
            <p>{employee.location.name}</p>
        </div>
    </div>
)