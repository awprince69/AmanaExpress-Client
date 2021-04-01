import React from 'react';
import { Link } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import './Admin.css'

const Admin = () => {
    return (
        <div className='d-flex'>
            <div className='sideBar text-white'>
                <Link className="navbar-brand text-white" to='/home'><h1>Amana Express</h1></Link>
                <br />
                <p>Mange Product</p>
                <p>Add Product</p>
                <p>Edit Product</p>
            </div>
            <AddProduct></AddProduct>
        </div>
        
    );
};

export default Admin;
