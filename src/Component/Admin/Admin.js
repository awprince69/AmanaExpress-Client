import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            weight: data.weight,
            price: data.price,
            ImageURL: imageURL
        }
        const url = 'http://localhost:5055/addProduct'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(eventData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => console.log("data server response"))
    };
    const handleImageUpload = event => {
        const imageData = new FormData()
        imageData.set('key', '3cc9f1c005a3c4ac0be1edb9ddfb87ef')
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                console.log(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="d-flex">
            <div>
                <nav className="nav flex-column bg-dark">
                    <Link className="nav-link active" aria-current="page" to="#">Manage Product</Link>
                    <Link className="nav-link" to="#">Add Product</Link>
                    <Link className="nav-link" to="#">Edit product</Link>
                </nav>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" placeholder="product name" ref={register} />
                    <br />
                    <input name="weight" placeholder="product weight" ref={register} />
                    <br />
                    <input  name="price" placeholder="product price" ref={register} />
                    <br />
                    <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Admin;