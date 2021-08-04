import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Countries = (props) => {
    const {name,capital} = props.country;

    const history = useHistory();
    const handleClick = (countryId)=>{
        const url = `/country/${countryId}`;
        history.push(url);
    }

    return (
        <div>
            <h1>Name: {name}</h1>
            <h2>Capital : {capital}</h2>
            <p><Link to={`/country/${name}`}>Show Details</Link></p>
            <button onClick={()=> handleClick(name)}>Click</button>
        </div>
    );
};

export default Countries;