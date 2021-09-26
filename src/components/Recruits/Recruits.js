import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Hired from '../Hired/Hired';
import Recruit from '../Recruit/Recruit';
import './Recruits.css'


const Recruits = () => {
    const [recruits, setRecruits] = useState([])
    const [hired, setHired] = useState([])

    // load data
    useEffect(() => {
        fetch('recruits.JSON')
            .then(res => res.json())
            .then(data => setRecruits(data))
    }, [])

    const handleAddRecruit = (recruit) => {
        // Check if already exists and add to the array 
        if (!(hired.find(h => h.name === recruit.name))) {
            console.log(hired)
            const newSelections = [...hired, recruit]
            setHired(newSelections)
        }
        else {

        }
    }

    return (
        <div className="recruit-container row py-5">
            {/* Recruits */}
            <div className="col-9">
                <div className="container row row-cols-3 m-0">
                    {
                        recruits.map(recruit => <Recruit
                            recruit={recruit}
                            key={recruit.name}
                            handleAddRecruit={handleAddRecruit}
                        ></Recruit>)
                    }
                </div>
            </div>

            {/* Selected Recruits */}
            <div className="col-3 w-25 p-0">
                <Hired hired={hired}></Hired>
            </div>
        </div>
    );
};

export default Recruits;