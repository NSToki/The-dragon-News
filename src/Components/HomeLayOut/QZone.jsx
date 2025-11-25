import React from 'react';
import swimingImage from "../../assets/swimming.png"
import ClassImage from "../../assets/class.png"
import PlayImage from "../../assets/playground.png"

const QZone = () => {
    return (
        <div className='bg-[#F3F3F3] p-3 mt-2'>
            <h1 className='font-bold mb-5'>Q-Zone</h1>
            <div className='flex-col justify-center items-center space-y-5'>
                <img src={swimingImage} alt="" srcset="" />
                <img src={ClassImage} alt="" srcset="" />
                <img src={PlayImage} alt="" srcset="" />
            </div>
        </div>
    );
};

export default QZone;