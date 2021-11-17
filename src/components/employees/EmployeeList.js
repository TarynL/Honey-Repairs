import React, { useState, useEffect } from "react";

export const EmployeeList = () => {
    const [employees, assignEmployees] = useState([])
    const [specialties, updateSpecialties] = useState("")

    useEffect(
        () => {
            fetch('http://localhost:8088/employees')
                .then(res => res.json())
                .then(
                    (employees) => {
                        assignEmployees(employees)
                    }
                )
        },
        []
    )

    useEffect(
        () => {
            updateSpecialties(employees.map(
                (employee) => {
                    return `${employee.specialty}`
                }
            ).join(", ")
            )
        },
        [employees]
    )

    return (
        <>
            <div>
                Specialties: {specialties}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p>{employee.name}</p>
                    }
                )
            }
        </>
    )
}