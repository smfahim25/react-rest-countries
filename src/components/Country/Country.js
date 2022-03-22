import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, area, region, population, flags, capital } = props.country;
    return (
        <div className='container'>
            <h1>{name.common}</h1>
            <img src={flags.png} alt="" />
            <p><span>Population:</span> {population}</p>
            <p><span>Area:</span> {area}</p>
            <p><span>Capital:</span> {capital}</p>
            <p><span>Region:</span> {region}</p>
        </div>
    );
};

export default Country;