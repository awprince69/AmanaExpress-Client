import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faPlus, faThLarge } from '@fortawesome/free-solid-svg-icons'
import './Admin.css'

const Admin = () => {
    const [showManage, setShowManage] = useState(false)
    return (
        <div className='d-flex'>
            <div className='sideBar text-white'>
                <Link className="navbar-brand text-white" to='/home'><h1>Amana Express</h1></Link>
                <br />
                {
                    <Link className="navbar-brand text-white" to='#manageProduct' onClick={() => setShowManage(true)}> <span style={{fontSize:'28px'}}><FontAwesomeIcon icon={faThLarge} /></span> Manage Product</Link>
                }
                {
                    <Link className="navbar-brand text-white" to='#addProduct' onClick={() => setShowManage(false)}><span style={{fontSize:'30px',marginRight:'10px'}}><FontAwesomeIcon icon={faPlus}/></span> Add Product</Link>
                }
                <Link className="navbar-brand text-white" to='#editProduct'><span style={{fontSize:'28px',marginRight:'10px'}}><FontAwesomeIcon icon={faPen} /></span> Edit Product</Link>
            </div>
            {
                !showManage && <AddProduct></AddProduct>
            }
            {
                showManage && <ManageProduct></ManageProduct>
            }
        </div>

    );
};

export default Admin;
