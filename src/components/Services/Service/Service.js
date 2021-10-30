import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {_id, img, name, price, description} = service;
    return (
        <div className="service p-2">
           <img src={img} alt="" />
           <h4>{name}</h4>
           <p>{description}</p>
           <h2>price: {price}</h2>
           <Link to={`/details/${_id}`}>
           <button className="btn btn-danger">Details</button>
           </Link>
           
        </div>
    );
};

export default Service;