import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Spinner from '../../images/spinner.jpg'

const ManageProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://still-sierra-25000.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    const handleDelete = (id, event) => {
        // console.log(id);
        fetch(`https://still-sierra-25000.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                alert("Delete Successfully");
            })
    }

    const renderProduct = (product, index) => {
        const { name, weight, price, _id } = product
        // console.log(_id);
        return (
            <tr key={index}>
                <td>{name}</td>
                <td>{weight}</td>
                <td>${price}</td>
                <td><span className='text-success'><FontAwesomeIcon icon={faEdit} /></span> <span className='text-danger' onClick={() => handleDelete(_id)}> <FontAwesomeIcon icon={faTrashAlt} /></span></td>
            </tr>
        )
    }
    return (
        <div className='container'>
            {
                products.length === 0 && <p style={{ margin: '0px 150px' }}><img src={Spinner} alt="" /></p>
            }
            {
                products.length !== 0 &&
                < Table hover>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Weight</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(renderProduct)
                        }
                    </tbody>
                </Table >
            }
        </div >
    );
};

export default ManageProduct;