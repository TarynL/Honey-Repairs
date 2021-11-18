import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

export const EmployeeList = () => {
    const [employees, assignEmployees] = useState([])
    const [specialties, updateSpecialties] = useState("")
    const history = useHistory()

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
                <button onClick={() => history.push("/employees/create")}>Add New Employee</button>
            </div>

            <div>
                Specialties: {specialties}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={employee.id}>{employee.name}</p>
                    }
                )
            }
        </>
    )
}