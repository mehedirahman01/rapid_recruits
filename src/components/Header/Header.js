import React from 'react';
import cover from '../../images/cover.png'
import './Header.css'


const Header = () => {
    return (
        <div>
            {/* Cover */}
            <div className="row cover">
                {/* Cover Left */}
                <div className="col d-flex align-items-center text-white p-0">
                    <div className="px-5">
                        <h1 className="pb-1">Rapid Recruits</h1>
                        <h3 className="pb-3">Best Solution to build your team</h3>
                        <p>Here is the opportunity to build up your team. You can hire people of different sectors according to your company budget</p>
                        <h4>Maximum Budget: 1 Million</h4>
                    </div>
                </div>
                {/* Cover Right */}
                <div className="col p-0">
                    <img className="cover-image" src={cover} alt="" />
                </div>
            </div>
        </div >
    );
};

export default Header;