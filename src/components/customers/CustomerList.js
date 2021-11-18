import React, { useState, useEffect } from "react";

export const CustomerList = () => {
    const [customers, assignCustomers] = useState([])
    const [totalCustomerMessage, updateMessage] = useState("")

    useEffect(
        () => {
            fetch('http://localhost:8088/customers')
                .then(res => res.json())
                .then(
                    (customers) => {
                        assignCustomers(customers)
                    }
                )
        },
        []
    )

    useEffect(
        () => {
            if (customers.length === 1) {
                updateMessage("You have 1 customer")
            }
            else {
                updateMessage(`You have ${customers.length} customers`)
            }
        },
        [customers]
    )

    return (
        <>
            <div>{totalCustomerMessage}</div>
            {
                customers.slice(0, 5).map(
                    (customer) => {
                        return <p key={customer.id}>{customer.name}</p>
                    }
                )
            }
        </>
    )
}