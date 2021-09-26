import React from 'react';
import cover from '../../images/cover.png'
import './Header.css'


const Header = () => {
    return (
        <div>
            {/* Cover */}
            <div className="row cover">
                {/* Cover Left */}
                <div className="col d-flex align-items-center text-white">
                    <div className="px-5">
                        <h1 className="pb-1">Rapid Recruits</h1>
                        <h3 className="pb-3">Best Solution to build your team</h3>
                        <p>Here is the opportunity to build up your team. You can hire people of different sectors according to your company budget</p>
                    </div>
                </div>
                {/* Cover Right */}
                <div className="col">
                    <img src={cover} alt="" />
                </div>
            </div>
        </div >
    );
};

export default Header;