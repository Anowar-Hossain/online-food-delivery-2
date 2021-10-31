import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { serviceId } = useParams();
    const [book, setBook] = useState({});
    const { user } = useAuth();
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setBook(data));
    },[])
    return (
        <div className="row">
            <h1 className="text">Booking Page</h1>
            <div className="col-md-6">
            <img className="w-50 h-50" src={book.img} alt="" />
            <h3>{book.name}</h3>
            <p><small>{book.description}</small></p>
            </div>
            <div className="col-md-6">
            <form className="booking-form" onSubmit={handleSubmit()}>
                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />
                <input type="submit" value="Booked" />
            </form>
            </div>
        </div>
    );
};

export default Booking;