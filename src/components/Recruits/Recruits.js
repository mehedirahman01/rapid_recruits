import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Recruit from '../Recruit/Recruit';


const Recruits = () => {
    const [recruits, setRecruits] = useState([])
    // load data
    useEffect(() => {
        fetch('recruits.JSON')
            .then(res => res.json())
            .then(data => setRecruits(data))
    }, [])
    return (
        <div className="row my-5">
            {/* Recruits */}
            <div className="col-9">
                <div className="container row row-cols-3">
                    {
                        recruits.map(recruit => <Recruit
                            recruit={recruit}
                            key={recruit.name}
                        ></Recruit>)
                    }
                </div>
            </div>

            {/* Selected Recruits */}
            <div className="col-3">
                <h4>Selected Recruits</h4>
            </div>
        </div>
    );
};

export default Recruits;