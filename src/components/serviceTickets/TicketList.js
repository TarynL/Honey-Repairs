import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const history = useHistory()


    useEffect(
        () => {
            return fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((ticket) => {
                    updateTickets(ticket)
                })
        },
        []
    )

    return (
        <>
            <div>
                <button onClick={() => history.push("/tickets/create")}>Create Ticket</button>
            </div>
            <div>
                {
                    tickets.map(ticket => {
                        return <p key={ticket.id}>{ticket.description} Submitted by {ticket.customer.name} and worked on by {ticket.employee.name}</p>
                    }
                    )
                }
            </div>
        </>
    )
}
