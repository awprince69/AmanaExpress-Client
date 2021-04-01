import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import './Orders.css'
import Spinner from '../../images/spinner.jpg'

const Orders = () => {
    const [loggedIn, setLoggedIn] = useContext(UserContext)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5055/orders?email=${loggedIn.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const renderProduct = (orders, index) => {
        const { product, price, image, orderTime } = orders
        return (
            <tr key={index}>
                <td><img src={image} alt="" /></td>
                <td>{product}</td>
                <td>${price}</td>
                <td>{new Date(orderTime).toDateString()}</td>
            </tr>
        )
    }
    return (
        <div className='container'>
            {
                orders.length === 0 && <p style={{ margin: '0px 150px' }}><img src={Spinner} alt="" /></p>
            }
            {
                orders.length !== 0 &&
                <Table bordered hover variant="dark" className='productImage'>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>OrderTime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(renderProduct)
                        }
                    </tbody>
                </Table >
            }
        </div>
    );
};

export default Orders;