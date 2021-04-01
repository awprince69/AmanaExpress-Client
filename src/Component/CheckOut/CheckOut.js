import { Button } from 'react-bootstrap';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import './CheckOut.css'
import { UserContext } from '../../App';
import { useContext } from 'react';

const CheckOut = () => {
    const { id } = useParams();
    const [productId, setProductId] = useState({})
    useEffect(() => {
        const url = `http://localhost:5055/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProductId(data))
    }, [id])
    
    const { name, price, ImageURL } = productId;
    const [loggedIn, setLoggedIn] = useContext(UserContext)

    const handleCheckOut = () => {
        const addOrder = { ...loggedIn, product: name, price: price, image: ImageURL, orderTime: new Date() }
        console.log(addOrder);
        fetch('http://localhost:5055/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log("order successfully");
            })
    }
    return (
        <div className='container mt-2 bg-light checkOutContainer'>
            <h1>Checkout</h1>
            <table className="table table-hover shadow">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{name}</td>
                        <td>1</td>
                        <td>${price}</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td colSpan="2">Total</td>
                        <td>${price}</td>
                    </tr>
                </tbody>
            </table>
            <Button onClick={handleCheckOut} type='submit' className='float-right button' variant='outline-info'>CheckOut</Button>
        </div>
    );
};

export default CheckOut;