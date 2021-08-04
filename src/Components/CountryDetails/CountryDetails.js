import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = (props) => {
   const {countryId} = useParams();
   const [country,setCountry] = useState([]);
   useEffect(()=>{
       const url = `https://restcountries.eu/rest/v2/name/${countryId}`;
       fetch(url)
       .then(res=>res.json())
       .then(data=>setCountry(data));
   },[])

   
    return country.map(({name,flag,capital,region,population,demonym,nativeName})=>
        <div key={name}>
            <h3>{name}</h3>
            <img src={flag} alt="" />
            <div>Capital :  {capital}</div>
        </div>
    );
};

export default CountryDetails;