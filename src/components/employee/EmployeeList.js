import React, {useState, useEffect} from "react";
import { getAllEmployees } from "../../modules/EmployeeManager";
import { EmployeeCard } from "./Employee";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return getAllEmployees().then(APIData => {
            setEmployees(APIData)
        })
    }

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <div className="container-cards">
            {employees.map(employee => <EmployeeCard employee={employee} key={employee.id} />)}
        </div>
    );
};