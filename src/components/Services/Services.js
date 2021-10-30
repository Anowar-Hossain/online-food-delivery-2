import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=> {
        fetch('https://evening-depths-39533.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[]);
    return (
        <div>
            <h1>services: {services.length}</h1>
            <div className="services-container">
            {
              services.map(service=> <Service
              keys={service._id}
              service={service}>
              </Service>)
            }
            </div>
            
        </div>
    );
};

export default Services;