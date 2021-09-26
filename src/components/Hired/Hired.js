import React from 'react';
import './Hired.css'

const Hired = (props) => {
    const { hired } = props

    // Calculate Total Salary
    let totalSalary = 0
    for (const recruit of hired) {
        totalSalary = totalSalary + recruit.expectedSalary
    }

    // Shows Warning when salary exceeds budget
    let salary
    if (totalSalary <= 1000000) {
        salary = <h6 className="m-0 p-2 text-white">Total Salary: ${totalSalary}</h6>
    } else {
        salary = <h6 className="m-0 p-2 text-danger">Total Salary: ${totalSalary}</h6>
    }

    return (
        <div className="sticky-top py-3 border rounded-3 me-5">
            {/* Heading Text */}
            <div className="list-heading">
                <h4>Selected Recruits</h4>
                <h6>Number of Recruits: {hired.length}</h6>
                {salary}
            </div>

            {/* Recruits List */}
            <ul className="list-group d-flex align-items-center pt-3" >
                {hired.map(hire => <li
                    key={hire.name} className="list-group-item w-50"><img className="pe-2" height="50px" src={hire.profileImage} alt="" /> <h6>{hire.name}</h6></li>
                )
                }
            </ul>
        </div >
    );
};

export default Hired;