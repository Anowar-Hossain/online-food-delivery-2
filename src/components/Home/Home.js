import React from 'react';
import { Container } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    return (
        <div>
           
             <div
            style={{
                background: `url(https://image.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                // backgroundSize: "cover",
                width: "100%",
                height: "100%"
              }}>
                 <div style={{ height: "90vh" }}
                    className="d-flex justify-content-center align-items-center">       
                 </div>
             
            </div>
        </div>
    );
};

export default Home;