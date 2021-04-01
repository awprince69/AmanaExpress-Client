import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Products from '../Products/Products';
import './Home.css'
import { Button } from 'react-bootstrap';

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
                    products.map(product => <Products key={product._id} product={product}></Products>)
                }
            </div>
        </div>
    );
};

export default Home;