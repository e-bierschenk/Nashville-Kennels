import React, { useState, useEffect } from "react";
import { CustomerCard } from "../customer/Customer";
import { getAllCustomers, getCustomerById } from "../../modules/CustomerManager";

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    const getCustomers = () => {
        return getAllCustomers().then(APIData => {
            setCustomers(APIData)
        })
    }

    useEffect(() => {
        getCustomers()
    }, [])

    return (
        <div className="container-cards">
            {customers.map(customer => <CustomerCard customer={customer} key={customer.id} />)}
        </div>
    )
}