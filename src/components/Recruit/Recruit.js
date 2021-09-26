import React from 'react';
import './Recruit.css'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileSignature } from '@fortawesome/free-solid-svg-icons'
const hire = <FontAwesomeIcon icon={faFileSignature} />

const Recruit = (props) => {
    const { name, jobTitle, expectedSalary, email, country, profileImage } = props.recruit
    return (
        // Card
        <div className="col item mb-3 pb-3">
            <div className="card item-card card-block">
                <img className="mx-auto rounded-circle mt-3" height="200px" width="200px" src={profileImage} alt="" />
                <h5 className="card-title mt-3">{name}</h5>
                <p><b>{jobTitle}</b></p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Expected Salary: ${expectedSalary}</li>
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Country: {country}</li>
                    <button onClick={() => props.handleAddRecruit(props.recruit)} className="my-3 btn btn-outline-success text-white w-50 mx-auto"><span>{hire}</span> Hire</button>
                </ul>
            </div>
        </div>
    );
};

export default Recruit;