import React from 'react';

const Subtitle = ({title, subtitle}) => {
    return (
        <div className='text-center my-5'>
            <p>-------------------------------</p>
                <h1 className='text-center text-xl font-bold font-parkinsans text-blue-700 opacity-40 uppercase'>{title}</h1>
                <h2 className='text-center font-bold font-parkinsans text-blue-700 opacity-40'>{subtitle}</h2>
            <p>-------------------------------</p>
        </div>
    );
};

export default Subtitle;