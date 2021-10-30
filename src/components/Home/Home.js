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
             <Container>
                 <div style={{ height: "90vh" }}
                    className="d-flex justify-content-center align-items-center">       
                <div className="text-center my-5 py-5">
                <h1 className="text-primary fw-bolder fs-1">Online Food Service</h1>
                <p className="text-warning">Where can I talk to a doctor online?
                <br />
                HOW TO CONSULT A DOCTOR ONLINE VIA TEXT/AUDIO/VIDEO?</p>
                <ul className="text-danger">
                    <li>Choose the doctor.</li>
                    <li>Book a slot.</li>
                    <li>Make payment.</li>
                    <li>Be present in the consult room on apollo247.com at the time of consult.</li>
                </ul>
                </div>
                 </div>
             </Container>
            </div>
        </div>
    );
};

export default Home;