import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Products from '../Products/Products';
import './Home.css'
import { Button } from 'react-bootstrap';
import Spinner from '../../images/spinner.jpg'

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5055/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (
        <div>
            <div className="searchField">
                <input type="text" placeholder='Search your product'></input>
                <Button variant='success'>Search</Button>
            </div>
            <div className="homeContainer">
                {
                    products.length === 0 && <p style={{margin:'0px 300px'}}><img src={Spinner} alt=""/></p>
                }
                {
                    products.map(product => <Products key={product._id} product={product}></Products>)
                }
            </div>
        </div>
    );
};

export default Home;