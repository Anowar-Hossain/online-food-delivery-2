import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {detailsId} = useParams();
    const [details, setDetails] = useState([]);
    useEffect(()=> {
        fetch('/details.json')
        .then(res=>res.json())
        .then(data=>setDetails(data));
    },[]);
    
    const newDetail = details.find(de=> de.id == detailsId);
    console.log(newDetail);
    
    return (
        <div>
            <h2 className="text-danger">Food Details :{details.name}</h2>
            <div className="row mt-5">
                <div className="col-md-6">
                <img className="w-75"src={newDetail?.img} alt="" />
                </div>
                <div className="col-md-6">
                  <h3>{newDetail?.name}</h3>
                  <p><small>{newDetail?.details}</small></p>
                  <h2>Fees: {newDetail?.deliveryTime}</h2>
                </div>
            </div>
        </div>
    );
};

export default Details;